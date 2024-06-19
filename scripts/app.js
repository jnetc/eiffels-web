document.addEventListener('DOMContentLoaded', () => {

  // Toggle left side menu
  const menuButton = document.querySelector('.btn-menu')
  const app = document.querySelector('.app__wrapper')

  menuButton.addEventListener('click', () => {
    app.classList.toggle('hidden')
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
  const popoverButons = document.querySelectorAll('.fm-row__button')
  const dialog = document.querySelector('#fm-dialog')

  dialog.querySelector('#fm-dialog__close-btn').addEventListener('click', () => {
    dialog.close()

    dialog.querySelector('img').classList.add('hide-file')
    dialog.querySelector('iframe').classList.add('hide-file')
    dialog.querySelector('audio').classList.add('hide-file')
    dialog.querySelector('video').classList.add('hide-file')
    // Stop playing audio and video after close
    dialog.querySelector('audio').pause()
    dialog.querySelector('video').pause()
  })


  popoverButons.forEach((button) => {

    button.addEventListener('click', () => {
      // Get filename from data-file attribute
      const filename = button.closest('.fm-tb__fm-row').querySelector('.fm-row__name').dataset.file
      // Get folder name from data-source attribute
      // Folder name is the same as the "public" folder
      // image folder = pablic/image
      // audio folder = pablic/audio
      const folder = button.closest('.fm-tb__fm-row').querySelector('.fm-row__type').dataset.source

      dialog.showModal()
      // Remove "hide-file" class to show the dialog window
      // Set source to the attribute
      // Adding filename to the top bar on the popover
      switch (folder) {
        case 'image':
          dialog.querySelector('img').classList.remove('hide-file')
          dialog.querySelector('img').setAttribute('src', `public/${folder}/${filename}`)
          dialog.querySelector('.fm-dialog__file-name').textContent = filename
          break;
        case 'pdf':
          dialog.querySelector('iframe').classList.remove('hide-file')
          dialog.querySelector('iframe').setAttribute('src', `public/${folder}/${filename}`)
          dialog.querySelector('.fm-dialog__file-name').textContent = filename
          break;
        case 'video':
          dialog.querySelector('video').classList.remove('hide-file')
          dialog.querySelector('video').setAttribute('src', `public/${folder}/${filename}`)
          dialog.querySelector('.fm-dialog__file-name').textContent = filename
          break;
        case 'audio':
          dialog.querySelector('audio').classList.remove('hide-file')
          dialog.querySelector('audio').setAttribute('src', `public/${folder}/${filename}`)
          dialog.querySelector('.fm-dialog__file-name').textContent = filename
          break;
        default:
          break;
      }
    })
  })

  // Working with file manager table and rows selection
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
