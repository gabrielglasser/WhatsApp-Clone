export class DocumentPreviewController {
  constructor(file) {
    this._file = file;
  }

  getPreviewData() {

    return new Promise((resolve, reject) => {

      switch (this._file.type) {

        case 'image/jpeg':
        case 'image/png':
        case 'image/gif':
        case 'image/jpg':
        let reader = new FileReader();
        reader.onload = (e) => {
          resolve(reader.result);
        }
        reader.onerror = (e) => {
          reject({
            src: reader.result,
            info: this._file.name
          });
        }
        reader.readAsDataURL(this._file);
          break;

          case 'application/pdf':

          break;

          default:
            reject();
          break;

      }

    })

  }
}