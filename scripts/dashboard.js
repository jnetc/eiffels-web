document.addEventListener('DOMContentLoaded', () => {

  // Toggle left side menu
  const menuButton = document.querySelector('.btn-menu')
  const dashboard = document.querySelector('.dashboard__wrapper')

  menuButton.addEventListener('click', () => {
    dashboard.classList.toggle('hidden')
  })

  // Change active state of filter buttons
  const filterButtons = document.querySelectorAll('.fm-filters__btn')

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.classList.contains('btn-selected')) {
        return
      }

      filterButtons.forEach((btn) => btn.classList.remove('btn-selected'))
      button.classList.add('btn-selected')
    })
  })

  // Modal windows for different file types
  const popoverButons = document.querySelectorAll('[popovertarget]')
  const imageFile = document.querySelector('#image-file')
  const pdfFile = document.querySelector('#pdf-file')
  const videoFile = document.querySelector('#video-file')
  const audioFile = document.querySelector('#audio-file')

  popoverButons.forEach((button) => {
    button.addEventListener('click', () => {
      // Get filename from data-file attribute
      const filename = button.closest('.fm-tb__fm-row').querySelector('.fm-row__name').dataset.file
      // Get folder name from data-file attribute
      // Folder name is the same as the "public" folder
      const folder = button.closest('.fm-tb__fm-row').querySelector('.fm-row__name').dataset.source
      // Set source
      switch (folder) {
        case 'image':
          imageFile.querySelector('img').setAttribute('src', `./public/${folder}/${filename}`)
          break;
        case 'pdf':
          pdfFile.querySelector('iframe').setAttribute('src', `./public/${folder}/${filename}`)
          break;
        case 'video':
          videoFile.querySelector('video').setAttribute('src', `./public/${folder}/${filename}`)
          break;
        case 'audio':
          audioFile.querySelector('audio').setAttribute('src', `./public/${folder}/${filename}`)
          break;
        default:
          break;
      }
    })
  })
})
