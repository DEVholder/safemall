
$('#summernote').summernote({
    placeholder: '내용을 입력해 주세요',
    tabsize: 2,
    height: 120,
    toolbar: [
    //   ['style', ['style']],
      ['font', ['bold', 'underline', 'clear']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
    ],
    height: 300,                 // set editor height
    minHeight: 500,             // set minimum height of editor
    maxHeight: null,             // set maximum height of editor
    focus: true,
    disableResizeEditor: true,
    disableDragAndDrop: true,
    lang: 'ko-KR',
    airMode: true
    
  });
