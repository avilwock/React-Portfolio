// This is a static page mocking an "About Us" section for our fake user data
export default function ProfilePage() {
  return (
    <>
    <h1 style={{ marginTop: '150px', display: 'flex', justifyContent: 'center', fontSize: '50px' }}>About Me</h1>
      <div style={{ fontSize: '20px', display: 'flex', justifyContent: 'center', color: 'white' }}>
        
          <div className="container pt-4" style={{ maxWidth: '500px', textAlign: 'center' }}>
              <img src="./images/Screenshot.jpg" alt="My profile picture" style={{height: '250px', border: '5px purple solid', borderRadius: '50px' }} />
              <p>
                My name is Amanda Vilwock, I&apos;m a new web-developer with several projects. I&apos;ve created over the course of a bootcamp, as well as a few personal projects.
              </p>
              <p>I&apos;m hoping to find a career where I can put my programming skills to use.
              </p>
          </div>
      </div>
      </>
  );
}
