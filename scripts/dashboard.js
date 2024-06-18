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
      // Get folder name from data-source attribute
      // Folder name is the same as the "public" folder
      // image folder = pablic/image
      // audio folder = pablic/audio
      const folder = button.closest('.fm-tb__fm-row').querySelector('.fm-row__type').dataset.source
      // Set source
      switch (folder) {
        case 'image':
          imageFile.querySelector('img').setAttribute('src', `public/${folder}/${filename}`)
          break;
        case 'pdf':
          pdfFile.querySelector('iframe').setAttribute('src', `public/${folder}/${filename}`)
          break;
        case 'video':
          videoFile.querySelector('video').setAttribute('src', `public/${folder}/${filename}`)
          break;
        case 'audio':
          audioFile.querySelector('audio').setAttribute('src', `public/${folder}/${filename}`)
          break;
        default:
          break;
      }
    })
  })

  // Working with file manager table and rows
  const selectAllCheckBox = document.getElementById('select-all')
  const tableBody = document.querySelector('.fm-tb-body')
  const rowCheckBoxes = [...tableBody.querySelectorAll('input')]
  const actionBar = document.querySelector('.fm-tb__action-bar')
  const listOfCheckBoxes = [...tableBody.querySelectorAll('input')]

  listOfCheckBoxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {

      const isChecked = listOfCheckBoxes.filter((checkbox) => checkbox.checked === true)
      const isCheckedAll = listOfCheckBoxes.every((checkbox) => checkbox.checked === true)

      // Selecting or deselecting all files
      selectAllCheckBox.checked = isCheckedAll ? true : false

      // "not-enable" class needed for disable buttons which should be enabled only when one file is selected
      // to prevent multiple editings files
      if (isChecked.length === 1) {
        actionBar.classList.add('show')
        actionBar.classList.remove('not-enable')
        return
      }

      if (isChecked.length > 1) {
        actionBar.classList.add('not-enable')
        return
      }

      // Hide action bar if no files selected
      actionBar.classList.remove('show')
      actionBar.classList.remove('not-enable')
    })
  })


  // Selecting or deselecting all files
  selectAllCheckBox.addEventListener('change', (event) => {

    if (!event.target.checked) {
      for (let i = 0; i < rowCheckBoxes.length; i++) {
        rowCheckBoxes[i].checked = false;
      }
      // Hide action bar
      actionBar.classList.remove('show')
      actionBar.classList.remove('not-enable')
      return
    }

    for (let i = 0; i < rowCheckBoxes.length; i++) {
      rowCheckBoxes[i].checked = true;
    }
    // Show action bar
    actionBar.classList.add('show')
    actionBar.classList.add('not-enable')
  })
})
