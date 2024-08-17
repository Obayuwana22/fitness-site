document.getElementById('workoutForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const exercise = document.getElementById('exercise').value;
    const sets = document.getElementById('sets').value;
    const reps = document.getElementById('reps').value;
  
    addWorkout(exercise, sets, reps);
    clearForm();
  });
  
  function addWorkout(exercise, sets, reps) {
    const workoutList = document.getElementById('workoutList');
    const workoutItem = document.createElement('li');
  
    workoutItem.innerHTML = `${exercise} - ${sets} Sets x ${reps} Reps <button onclick="removeWorkout(this)">Remove</button>`;
  
    workoutList.appendChild(workoutItem);
  }
  
  function clearForm() {
    document.getElementById('exercise').value = '';
    document.getElementById('sets').value = '';
    document.getElementById('reps').value = '';
  }
  
  function removeWorkout(button) {
    button.parentElement.remove();
  }
  