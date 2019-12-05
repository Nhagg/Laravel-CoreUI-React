<?php

namespace App\Http\Controllers;

use Validator;
use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Http\Utils\Debug;

use App\Entities\Schema\di_datasource_doc;


class DatasourceController extends Controller
{
    public function all(Request $request){

        $pageSize = $this->param( 'page_size', 25 );

        $found = di_datasource_doc::listAll()->paginate( (int)$pageSize  );

        return $this->responseSuccess( $found );
    }

    public function listAll(){

        $ret = [];
        $datasources = di_datasource_doc::listAllCode();
        if( $datasources!=null ){
            foreach( $datasources as $ds ){
                $ret[ $ds->code ] = [
                    'code' => $ds->code,
                    'name' => $ds->name
                ];
            }
        }

        return $this->responseSuccess( array_values( $ret ) );
    }

    public function getSchemasByCode( Request $request){
        $validator = Validator::make($request->all(), [
            'code'     => 'required|string|min:1|max:128',
        ]);

        if( $validator->fails() ){
            return $this->responseError( -1, $validator->errors() );
        }

        $code = $this->param('code',null);

        $found = di_datasource_doc::findByCode( $code );
        if( $found==null ){
            return $this->responseSuccess( [] );
        }
        else {
            return $this->responseSuccess( $found->schemas );
        }
    }

    public function updateDoc(Request $request ){
        $validator = Validator::make($request->all(), [
            'code'        => 'required|string',
            'content'     => 'nullable|string',
            'mine_type'   => 'required|string|in:text/plain,text/markdown,text/html',
        ]);

        if( $validator->fails() ){
            return $this->responseError( -1, $validator->errors() );
        }

        $code       = $this->param('code');
        $content    = $this->param('content');
        $mineType   = $this->param('mine_type');

        $doc = di_datasource_doc::findByCode( $code );
        if( $doc==null ){
            $msg = "di_datasource_doc:$code not found for update doc";
            Debug::error( "ERROR: $msg" );
            return $this->responseError( -1, $msg );
        }

        try {
            if( $content==null ){
                $doc->doc = null;
            }
            else {
                $doc->doc = [
                    'mine_type' => $mineType,
                    'content'   => $content,
                    'changed_by' => 'anonymous', //T.B.D-Pls implement login,
                    'changed_at' => new \DateTime()
                ];
            }

            // update doc
            $doc->save();

            Debug::normal("Update doc od datasource $code success");
            return $this->responseSuccess( [ 'id' => $doc->id ]);
        }
        catch( \PDOException $e ){
            Debug::error("ERROR: catch exception:". $e->getMessage() );
            return $this->responseError( -1, $e->getMessage() );
        }
    }
}
