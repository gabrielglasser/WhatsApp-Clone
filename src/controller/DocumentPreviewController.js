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
          reader.onload = (e) => {

            pdfjsLib.getDocument(new Uint8Array(reader.result)).then(pdf => {

              pdf.getPage(1).then(page => {

                let viewport = page.getViewport(1);
                let canvas = document.createElement('canvas');
                let canvasContext = canvas.getContext('2d');

                canvas.height = viewport.height;
                canvas.width = viewport.width;
                page.render({
                  canvasContext,
                  viewport: viewport
                }).then(() => {
                  let _resolve = (pdf.numPages > 1) ? 'resolse' : '';

                  resolve(src = canvas.toDataURL(),
                  info = `${pdf.numPages} páginas${_resolve}`);
                }).catch(err => {
                  reject(err);
                });

              }).catch(err => {
                reject(err);
              });

            }).catch(err => {
              reject(err);
            });

          }
          reader.readAsArrayBuffer(this._file);
          break;

        default:
          reject();
          break;

      }

    })

  }
}