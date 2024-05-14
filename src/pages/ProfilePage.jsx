
// This is a static page mocking an "About Us" section for our fake user data
export default function ProfilePage() {
    return (
      <div className="container pt-4" style={{ marginTop: '75px', margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h1 style={{ marginTop: 250}}>Amanda Vilwock&apos;s Portfolio</h1>
          <p style={{ margin: 0, width: 600}}>My name is Amanda Vilwock, I&apos;m a new web-developer with 
            several projects I&apos;ve created over the course of a bootcamp,
            as well as a few personal projects.</p>
      </div>
    );
}
