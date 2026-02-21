import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../../components/navigation/navigation';

interface ImageGallery {
  title: string;
  folderPath: string;
  images: string[];
}

@Component({
  selector: 'app-picture-page',
  imports: [NavigationComponent, CommonModule],
  templateUrl: './picture-page.html',
  styleUrl: './picture-page.css',
})
export class PicturePage {
  galleries: ImageGallery[] = [
    {
      title: 'Tag der Chöre',
      folderPath: 'assets/images/Tag_der_chöre/',
      images: [
        'IMG_7280.JPG',
        'IMG_7282.JPG',
        'IMG_7285.JPG',
        'IMG_7286.JPG',
        'IMG_7287.JPG',
        'IMG_7288.JPG',
        'IMG_7289.JPG',
        'IMG_7290.JPG',
        'IMG_7293.JPG',
        'IMG_7313.JPG',
        'IMG_7340.JPG',
        'IMG_7341.JPG',
        'IMG_7349.JPG',
        'IMG_7361.JPG',
        'IMG_7363.JPG',
        'IMG_7367.JPG',
        'IMG_7375.JPG',
        'IMG_7377.JPG',
        'IMG_7378.JPG',
        'IMG_7388.JPG',
      ],
    },
    {
      title: 'Treffpunkt der Chöre',
      folderPath: 'assets/images/Treffpunkt_der_Chöre/',
      images: [
        'DaCapoAlFine.jpg',
        'DaCapoAlFine1.jpg',
        'DaCapoAlFine2.jpg',
        'DaCapoAlFine3.jpg',
        'DaCapoAlFine4.jpg',
        'DaCapoAlFine5.jpg',
      ],
    },
    {
      title: 'Schnifis',
      folderPath: 'assets/images/Schnifis/',
      images: [
        '4A7A0351.jpg',
        '4A7A0353.jpg',
        '4A7A0355.jpg',
        '4A7A0368.jpg',
        '4A7A0369.jpg',
        '4A7A0386.jpg',
        '4A7A0420.jpg',
        '4A7A0425.jpg',
        '4A7A0426.jpg',
        '4A7A0430.jpg',
        '4A7A0435.jpg',
        '4A7A0487.jpg',
        '4A7A0536.jpg',
        '4A7A0537.jpg',
        '4A7A0608.jpg',
        '4A7A0654.jpg',
        '4A7A0679.jpg',
        '4A7A0687.jpg',
        '4A7A0740.jpg',
      ],
    },
  ];
}
