class BackButton {
    static contextTypes = {
      router: () => true, // replace with PropTypes.object if you use them
    }

    const goBack =() =>{
        console.log("going back")
    }
  
    render() {
      return (
        // <button
        //   className="button_icon_left"
        //   onClick={this.context.router.history.goBack}>
        //     Back
        // </button>
        <div onClick={goBack}>Go Back</div>
      )
    }
  }
  export default BackButton;