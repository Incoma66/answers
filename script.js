  // Обработка кликов по тогглам
  document.querySelectorAll('.toggle').forEach(toggle => {
    toggle.addEventListener('click', function () {
      const target = this.getAttribute('data-target');
      const isTopLevel = !this.className.includes('indent-');
      const imageElement = document.getElementById('displayed-image');

      if (isTopLevel) {
        const isActive = this.classList.contains('active');

        document.querySelectorAll('.toggle').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('tr').forEach(row => {
          if (row.className.match(/group[0-9]+(-[0-9]+)?/)) {
            row.classList.add('hidden');
          }
        });

        if (!isActive) {
          this.classList.add('active');
          document.querySelectorAll('.' + target).forEach(row => row.classList.remove('hidden'));

          const imageSrc = this.getAttribute('data-image');
          imageElement.src = imageSrc || '';
        } else {
          imageElement.src = '';
        }
      } else {
        document.querySelectorAll('.' + target).forEach(row => {
          row.classList.toggle('hidden');
        });
      }

      const anyTopActive = [...document.querySelectorAll('.toggle')]
        .some(t => !t.className.includes('indent-') && t.classList.contains('active'));

      if (!anyTopActive) {
        imageElement.src = '';
      }
    });
  });

  // Обработка клика по кнопке и показ плашки с тенью
  const button = document.querySelector('.custom-hex-button');
  const tooltip = document.querySelector('.custom-tooltip');
  const tooltipShadow = document.querySelector('.custom-tooltip-shadow');

  if (button && tooltip && tooltipShadow) {
    button.addEventListener('click', function (event) {
      tooltip.classList.toggle('hidden');
      tooltipShadow.classList.toggle('hidden');
      event.stopPropagation();
    });

    document.addEventListener('click', function () {
      tooltip.classList.add('hidden');
      tooltipShadow.classList.add('hidden');
    });

    tooltip.addEventListener('click', function (event) {
      event.stopPropagation();
    });

    tooltipShadow.addEventListener('click', function (event) {
      event.stopPropagation();
    });
  }
