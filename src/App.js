import './App.css';

function ProfileCard() {
  const user = {
    name: "Mayuri Anant",
    email: "anantmayuri123456@gmail.com",
    address: "Manchar, Pune, Maharashtra",
    image: process.env.PUBLIC_URL + "/images/mayuri-profile.jpg"
  };

  return (
    <div className="card">
      <img src={user.image} alt="Mayuri" className="avatar" />
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Address:</strong> {user.address}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ProfileCard />
    </div>
  );
}

export default App;

