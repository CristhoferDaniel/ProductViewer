import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeImageUrl',
  standalone:true,
})
export class SanitizeImageUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(imageUrl: string): SafeUrl {
    // Si imageUrl está vacía o es undefined, devuelve una URL de imagen por defecto
    if (!imageUrl) {
      return this.sanitizer.bypassSecurityTrustUrl('https://via.placeholder.com/640x480?text=No+Image');
    }

    // Eliminar el prefijo 'unsafe:' si existe
    if (imageUrl.startsWith('unsafe:')) {
      imageUrl = imageUrl.slice(7);
    }
    if(imageUrl.includes('assets')){
      return this.sanitizer.bypassSecurityTrustUrl(
        'https://via.placeholder.com/640x480?text=No+Image'
      );
    }
    if(imageUrl.includes('placeimg')){
       return this.sanitizer.bypassSecurityTrustUrl(
         'https://via.placeholder.com/640x480?text=No+Image'
       );
    }
    imageUrl = imageUrl.replace(/&quot;/g, '"');
    imageUrl = imageUrl.replace("[", '');
    imageUrl = imageUrl.replace("]", '');
    imageUrl = imageUrl.replace(/"/g, '');

    // Sanitiza y devuelve la URL
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
}
