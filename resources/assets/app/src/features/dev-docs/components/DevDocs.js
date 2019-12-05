import React, {Component} from 'react';
import { connect }                from 'react-redux';

class DevDocs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="animated fadeIn">
                <div className={'card'}>
                    {/*<div className={'card-header'}> <i className={'fa fa-image'}></i> User Guide Install</div>*/}
                    <div className={'card-body'}>
                        <div className={''}>
                            <div>
                                <h2 className={'border-bottom'}>Frameworks and Library</h2>
                                <ul>
                                    <li><a href="https://laravel.com/">Laravel</a></li>
                                    <li><a href="https://reactjs.org/">React - Redux</a></li>
                                    <li><a href="https://coreui.io/admin-templates/react/">Core UI - React</a></li>
                                </ul>
                            </div>
                            <div>
                                <h2 className={'border-bottom'}>Link Git and CSS</h2>
                                <ul>
                                    <li><a href="https://gitlab.topica.vn/nhalh/topi-theme">Link Git</a></li>
                                    <li><a href="/css/top-themes.css?v=1.0">Link CSS</a></li>
                                </ul>
                            </div>
                            <div>
                                <h2 className={'border-bottom'}>Requirement</h2>
                                <ul>
                                    <li>PHP 7.1 or higher</li>
                                    <li>Node JS 8 or highter</li>
                                    <li>Composer</li>
                                </ul>
                            </div>
                            <div>
                                <h2 className={'border-bottom'}>Install</h2>
                                <ul>
                                    <li><code>npm install</code></li>
                                    <li><code>composer install</code></li>
                                    <li><code>php artisan key:generate</code></li>
                                    <li>Create file .env from .env.dev</li>
                                </ul>
                            </div>
                            <div>
                                <h2 className={'border-bottom'}>Develop System</h2>
                                <ul>
                                    <li><code>npm run watch</code></li>
                                    <li><code>php artisan serve</code> and open <a href="http://120.0.0.1:8000" target={'_blank'}>localhost</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const HOME_STORE = 'features/home';

    return {

    }
}

export default connect( mapStateToProps )(DevDocs);

