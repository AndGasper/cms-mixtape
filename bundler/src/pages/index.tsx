import { Component } from "react";


export class Index extends Component {
    constructor() {
        super();
    };''
    props: {
        data: Object;
    }
    render() {
        const { data } = this.props;
        return (
            <div className="helloWorld">
            {data}
            </div>
        )
    }
}
export default Index;