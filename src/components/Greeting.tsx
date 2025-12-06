const Greeting =()=>{

    const WelcomeMessage = "Hello World";
    const currentDate = new Date();
    return (
        <div>
           <h1>{WelcomeMessage}</h1>
           <p> Date : {currentDate.getDate()}</p>
        </div>
    )
}

export default Greeting;