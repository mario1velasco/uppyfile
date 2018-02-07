// const Uppy = require('../../node_modules/uppy/lib/core/Core')
// const DragDrop = require('../../node_modules/uppy/lib/plugins/DragDrop')
// const ProgressBar = require('../../node_modules/uppy/lib/plugins/ProgressBar')
// const Tus = require('../../node_modules/uppy/lib/plugins/Tus')

// const uppyOne = new Uppy({debug: true})
// uppyOne
//   .use(DragDrop, {target: '.UppyDragDrop-One'})
//   .use(Tus, {endpoint: '//master.tus.io/files/'})
//   .use(ProgressBar, {target: '.UppyDragDrop-One-Progress'})
//   .run()

// const uppyTwo = new Uppy({debug: true, autoProceed: false})
// uppyTwo
//   .use(DragDrop, {target: '#UppyDragDrop-Two'})
//   .use(Tus, {endpoint: '//master.tus.io/files/'})
//   .use(ProgressBar, {target: '.UppyDragDrop-Two-Progress'})
//   .run()

// var uploadBtn = document.querySelector('.UppyDragDrop-Two-Upload')
// uploadBtn.addEventListener('click', function () {
//   uppyTwo.upload()
// })

// var uppy = Uppy.Core({ autoProceed: false })
//         uppy.use(Uppy.DragDrop, {target: '.UppyDragDrop'})
//         uppy.use(Uppy.Tus, {endpoint: '//master.tus.io/files/'})
//         uppy.run()