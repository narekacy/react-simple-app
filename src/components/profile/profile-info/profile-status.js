import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        this.setState({
            editMode: true,
        });
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status);
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        })
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.status !== this.props.status) {
            // console.log('prevState.status  ' + prevState.status);
            console.log('this.props.status  ' + prevState.status);
            this.setState({
                status: this.props.status,
            })
        }
    }

    render() {
        return (
            <div>
                <div>
                    {!this.state.editMode &&
                    <span onDoubleClick={this.activateEditMode}>
                        {!this.props.status ? '---' : this.props.status}
                    </span>}
                </div>
                <div>
                    {this.state.editMode &&
                    <input
                        onChange={this.onStatusChange}
                        autoFocus={true}
                        onBlur={this.deactivateEditMode}
                        value={this.state.status}
                    />}
                </div>
            </div>
        );
    }
}

export default ProfileStatus;
