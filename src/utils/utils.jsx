export const handleLogin = (email, password) => {
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }
    alert("Login successful! (Backend integration required)");
  };
  
  export const handleSignup = (name, email, password, confirmPassword) => {
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Signup successful! (Backend integration required)");
  };
  