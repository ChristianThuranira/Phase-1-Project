document.addEventListener('DOMContentLoaded', () => {
  // Handle Signup Form
  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
      signupForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const name = document.getElementById('signup-name').value;
          const email = document.getElementById('signup-email').value;
          const password = document.getElementById('signup-password').value;
          localStorage.setItem('user', JSON.stringify({ name, email, password }));
          alert('Signup successful! Redirecting to login...');
          window.location.href = 'login.html';
      });
  }

  // Handle Login Form
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const email = document.getElementById('login-email').value;
          const password = document.getElementById('login-password').value;
          const user = JSON.parse(localStorage.getItem('user'));

          if (user && user.email === email && user.password === password) {
              alert('Login successful! Redirecting to planner...');
              window.location.href = 'planner.html'; // Redirect to the planner page
          } else {
              alert('Invalid credentials!');
          }
      });
  }

  // Personal Data Form Submission
  const personalDataForm = document.getElementById('personal-data-form');
  if (personalDataForm) {
      personalDataForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const height = document.getElementById('height').value;
          const weight = document.getElementById('weight').value;
          const bloodGroup = document.getElementById('blood-group').value;
          const injuries = document.getElementById('injuries').value;
          localStorage.setItem('personalData', JSON.stringify({ height, weight, bloodGroup, injuries }));
          alert('Personal data saved!');
      });
  }

  // Workout Plan Data
  const workoutSchedule = [
      { day: 'Day 1', workout: 'Full Body Workout', youtubeVideo: 'https://www.youtube.com/embed/xyz' },
      { day: 'Day 2', workout: 'Upper Body Strength', youtubeVideo: 'https://www.youtube.com/embed/xyz' },
      { day: 'Day 3', workout: 'Cardio & Core', youtubeVideo: 'https://www.youtube.com/embed/xyz' },
      { day: 'Day 4', workout: 'Lower Body Strength', youtubeVideo: 'https://www.youtube.com/embed/xyz' },
      { day: 'Day 5', workout: 'Mobility and Stretching', youtubeVideo: 'https://www.youtube.com/embed/xyz' },
      { day: 'Day 6', workout: 'Cardio Blast', youtubeVideo: 'https://www.youtube.com/embed/xyz' },
      { day: 'Day 7', workout: 'Rest or Active Recovery', youtubeVideo: 'https://www.youtube.com/embed/xyz' },
  ];

  // Render 7-Day Workout Plan
  const workoutPlanContainer = document.getElementById('workout-plan');
  if (workoutPlanContainer) {
      workoutSchedule.forEach((workout, index) => {
          workoutPlanContainer.innerHTML += `
              <div class="col-md-4 mb-3">
                  <div class="card">
                      <div class="card-body">
                          <h5 class="card-title">${workout.day}</h5>
                          <p class="card-text">${workout.workout}</p>
                          <iframe width="100%" height="200" src="${workout.youtubeVideo}" frameborder="0" allowfullscreen></iframe>
                          <input type="checkbox" id="workout-done-${index}" class="form-check-input">
                          <label class="form-check-label" for="workout-done-${index}">Mark as Done</label>
                      </div>
                  </div>
              </div>
          `;
      });
  }

  // Handle marking a workout as completed
  workoutPlanContainer?.addEventListener('change', (event) => {
      if (event.target.type === 'checkbox') {
          const checkbox = event.target;
          const dayIndex = checkbox.id.split('-')[2]; // Extract day index
          if (checkbox.checked) {
              workoutSchedule[dayIndex].completed = true;
              alert(`${workoutSchedule[dayIndex].day} marked as done!`);
          } else {
              workoutSchedule[dayIndex].completed = false;
              alert(`${workoutSchedule[dayIndex].day} marked as not done!`);
          }
      }
  });

  // Handle Daily Progress Submission
  const progressForm = document.getElementById('progress-form');
  if (progressForm) {
      progressForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const day = document.getElementById('workout-day').value;
          const notes = document.getElementById('progress-notes').value;

          if (notes) {
              alert(`Progress saved for ${day}: ${notes}`);
          } else {
              alert(`Please add some notes for your progress!`);
          }
      });
  }

  // Handle Logout
  const logoutButton = document.getElementById('logout-btn');
  if (logoutButton) {
      logoutButton.addEventListener('click', () => {
          alert('Logging out...');
          window.location.href = 'index.html'; // Redirect to landing page after logout
      });
  }
});
