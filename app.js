class ReactContainer extends React.Component {
    render() {
        return (
            <div>Hello! Welcome to ProGrads
                <div>Let's rock and roll!!!!! </div>
            </div>)
    };
}

const container = document.getElementById('react-container');
// Direclty pass the component to render
ReactDOM.render(<ReactContainer />, container);    