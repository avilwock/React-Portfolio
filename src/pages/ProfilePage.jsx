// This is a static page mocking an "About Us" section for our fake user data
export default function ProfilePage() {
  return (
      <div style={{ display: 'flex', justifyContent: 'center', color: 'white' }}>
          <div className="container pt-4" style={{ marginTop: '100px', maxWidth: '400px', textAlign: 'center' }}>
              <img src="./src/images/Screenshot.jpg" alt="My profile picture" style={{height: '250px', border: '5px purple solid', borderRadius: '50px' }} />
              <p>
                  My name is Amanda Vilwock, I&apos;m a new web-developer with several projects I&apos;ve created over the course of a bootcamp, as well as a few personal projects.
              </p>
          </div>
      </div>
  );
}
