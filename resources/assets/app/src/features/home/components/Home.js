import React, {Component} from 'react';
import { connect }                from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);
        this.listBgColors = [
            {
                title: 'Background Classy Version 2.0',
                class: 'bg-classy-v20',
                hex_code: '#DBA145',
                rgb_code: '',
            },
            {
                title: 'Background Black',
                class: 'bg-black',
                hex_code: '#000',
                rgb_code: '',
            },
            {
                title: 'Background Black 100',
                class: 'bg-black-100',
                hex_code: '#1a1a1a',
                rgb_code: '',
            },
            {
                title: 'Background Yellow',
                class: 'bg-yellow',
                hex_code: '#F4E348',
                rgb_code: '',
            },
            {
                title: 'Background Green',
                class: 'bg-green',
                hex_code: '#58D72B',
                rgb_code: '',
            },
            {
                title: 'Background Red',
                class: 'bg-red',
                hex_code: '#E14E4E',
                rgb_code: '',
            },
            {
                title: 'Background Blue',
                class: 'bg-blue',
                hex_code: '#1A73E8',
                rgb_code: '',
            },
            {
                title: 'Background Violet',
                class: 'bg-violet',
                hex_code: '#B438F1',
                rgb_code: '',
            },
            {
                title: 'Background Gray',
                class: 'bg-gray',
                hex_code: '#DADADA',
                rgb_code: '',
            },
        ];
        this.listButton = [
            {
                title: 'Classy',
                class: 'btn-topi-classy',
            },
            {
                title: 'Yellow',
                class: 'btn-topi-yellow',
            },
            {
                title: 'Green',
                class: 'btn-topi-green',
            },
            {
                title: 'Red',
                class: 'btn-topi-red',
            },
            {
                title: 'Blue',
                class: 'btn-topi-blue',
            },
            {
                title: 'Gray',
                class: 'btn-topi-gray',
            },
            // {
            //     title: 'Link',
            //     class: 'btn-link',
            // },
        ];
        this.listButtonTypes = [
            {
                title: 'Normal',
                class: ''
            },
            {
                title: 'Active',
                class: 'active'
            },
            {
                title: 'Disabled',
                class: 'disabled'
            },
        ];
    }

    render() {
        let listDivColors = [];
        this.listBgColors.forEach(
            (color, index) => {
                listDivColors.push(
                    <div key={ index } className={'mb-4 col-12 col-sm-6 col-md-4 col-xl-2'}>
                        <div className={'mb-3 d-bg-color ' + color.class}></div>
                        <h6>{ color.title }</h6>
                        <table>
                            <tbody>
                            <tr>
                                <td className={'text-muted'}>HEX:</td>
                                <td className={'font-weight-bold'}>{color.hex_code}</td>
                            </tr>
                            <tr>
                                <td className={'text-muted'}>RBG:</td>
                                <td className={'font-weight-bold'}>{color.rbg_code}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                )
            }
        );
        let listButtons = [];
        this.listButtonTypes.forEach(
            type => {
                let listColors = [];
                this.listButton.forEach(
                    btn => {
                        listColors.push(
                            <div key={btn.class} className={'col-md-2 col-sm-4'}>
                                <button className={'btn btn-block ' + btn.class + ' ' + type.class}>{btn.title}</button>
                            </div>
                        )
                    }
                )
                listButtons.push(
                    <div key={type.title} className={'row form-group'}>
                        <div className={'col-md-12'}>
                            {type.title}
                        </div>
                        {listColors}
                    </div>
                )
            }
        )
        return (
            <div className="animated fadeIn">
                <div className={'card'}>
                    <div className={'card-header'}> <i className={'fa fa-image'}></i> Background Color</div>
                    <div className={'card-body'}>
                        <div className={'row'}>
                            { listDivColors }
                        </div>
                    </div>
                </div>
                <div className={'card'}>
                    <div className={'card-header'}> <i className={'fa fa-image'}></i> Buttons</div>
                    <div className={'card-body'}>
                        { listButtons }
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

export default connect( mapStateToProps )(Home);

