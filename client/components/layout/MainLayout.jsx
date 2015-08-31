MainLayout = React.createClass({
    propTypes: {},
    mixins: [
        // ReactMeteorData
    ],
    getInitialState() {
        return {}
    },
    getMeteorData() {
        // return {
        // currentUser: Meteor.user()
        //};
    },

    render() {
        return (
            <div>
                {this.props.header}
                {this.props.content}
                {this.props.footer}
            </div>
        )
    }
})