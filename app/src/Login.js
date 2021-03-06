import React from "react";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            pwd: ''
        };
    
        this.onChangeUserId = this.onChangeUserId.bind(this);
        this.onChangePwd = this.onChangePwd.bind(this);
        //this.submitHandler = this.submitHandler(this);
    }

    componentWillUnmount(event) {

        this.setState( (state) => {
            console.log(state);
            return { 
                userId: event.currentTarget[0].value,
                pwd: event.currentTarget[1].value
            }        
        });

    }

    onChangeUserId(event) {
        this.setState( () => {
            console.log(event.target.value);
            return {userId: event.target.value}
        });
    }

    onChangePwd(event) {

        this.setState( () => {
            console.log(event.target.value);
            return {pwd: event.target.value}
        });
    }

    submitHandler(event) {
        console.log('click');
        event.preventDefault();
        
        
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.submitHandler} >
                    <input type="text" name="userId" placeholder="아이디 또는 이메일"
                            onChange={this.onChangeUserId}/>
                    <input type="password" name="pwd" placeholder="비밀번호"
                            onChange={this.onChangePwd}/>
                    <button onClick={this.submitHandler}>로그인</button>
                </form>
            </div>
        );
    }
}

export default Login;