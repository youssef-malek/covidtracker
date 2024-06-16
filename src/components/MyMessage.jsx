const MyMessage = ({message})=>{


  if(message?.attachments?.length > 0){

    return (
      <img src ={message.attachments[0].file}
       className="message-image"
       alt="message-attachment"
       style={{ float : 'right'}}
  />
    )
  }
    return (
        <div
            className="message"
            style={{
                float: "right",
                marginRight: "18px",
                color: "white",
                backgroundColor: "#000000",
            }}
        >
            {message.text}
        </div>
    );
}

export default MyMessage;