//creates the contactpage
export default function ContactPage() {
    return (
        <>
            <div>
                <h2 style ={{ fontSize: '60px', marginTop: '150px', marginBottom: '90px', display: 'flex', justifyContent: 'center', alignContent: 'center'}}>Contact Me</h2>
                    <form style= {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <input style={{width: '80%', padding: '10px', boxSizing: 'border-box', borderRadius: '8px', margin: '7px'}} type="text" id="name" name="name" placeholder="Name"/>
                        <input style={{width: '80%', padding: '10px', boxSizing: 'border-box', borderRadius: '8px', margin: '7px'}} type="text" id="email" name="email" placeholder="Email"/>
                        <textarea style={{ width: '80%', height: '200px', padding: '10px', boxSizing: 'border-box', borderRadius: '8px', margin: '7px' }} id="message" name="message" placeholder="Please type your message"></textarea>
                        <button style ={{ borderRadius: '8px', fontSize: '20px', width: '95px', height: '40px', margin: '20px', backgroundColor: 'indigo', color: 'white' }}type="submit">Submit</button>
                    </form>
            </div>
    
        </>
    );
  }