const Logout = () => {
  // Clear user session or token here
  // For example: localStorage.removeItem('authToken');

  // Redirect to home or login page after logout
  window.location.href = '/login';

  return null; // No UI needed for logout
};

export default Logout;
