document.getElementById('attendance-mode').addEventListener('change', function () {
      const mode = this.value;
      document.getElementById('percent-input').style.display = mode === 'percent' ? 'block' : 'none';
      document.getElementById('days-input').style.display = mode === 'days' ? 'block' : 'none';
    });

    function calculateAttendance() {
      const required = parseFloat(document.getElementById('required').value);
      const mode = document.getElementById('attendance-mode').value;
      const total = parseFloat(document.getElementById('total-working').value);
      const left = parseFloat(document.getElementById('working-left').value);
      let attended;

      if (mode === 'percent') {
        const currentPercent = parseFloat(document.getElementById('current-percent').value);
        attended = (currentPercent / 100) * total;
      } else {
        attended = parseFloat(document.getElementById('days-attended').value);
      }

      const neededTotal = (required / 100) * total;
      const requiredDaysToAttend = Math.ceil(neededTotal - attended);

      const result = document.getElementById('result');

      if (requiredDaysToAttend <= left) {
        result.innerHTML = `<p>✅ You need to attend at least <strong>${requiredDaysToAttend}</strong> of the remaining <strong>${left}</strong> days to meet the required <strong>${required}%</strong> attendance.</p>`;
      } else {
        result.innerHTML = `<p>❌ It is not possible to meet the required attendance of <strong>${required}%</strong> with only <strong>${left}</strong> days left.</p>`;
      }
    }

    document.getElementById('theme-switch').addEventListener('change', function () {
     const isDark = document.body.classList.toggle('dark-mode');
     document.getElementById('theme-icon').textContent = isDark ? '☀️' : '🌙';
    });
