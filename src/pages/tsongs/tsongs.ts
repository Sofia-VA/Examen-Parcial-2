import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TsongsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tsongs',
  templateUrl: 'tsongs.html',
})
export class TsongsPage {
  SongsT=['1. All Is Hell That Ends Well (3:53)',
    '2. Titan Dream  (4:04)',
    '3. SkyWorld (3:12)',
    '4. El Dorado (4:14)',
    '5. The End Is the Beginning  (4:51)',
    '6. All the King´s Horses  (2:06)',
    '7. Realm of Power  (3:55)',
    '8. Winterspell (3:20)',
    '9. Blackheart (4:27)',
    '10. Juggernaut (2:34)',
    '11. Dark Ages (from Nemesis) (3:25)',
    '12. Our Last Hope (3:57)',
    '13. Icarus (2:53)',
    '14. For the Win (2:12)',
    '15. Sun & Moon (4:22)',
    '16. Big Sky (4:08)',
    '17. Starfleet (3:22)',
    '18. Queen of Crows (2:43)',
    '19. Blizzard ( 2:53)',
    '20. Breathe( 2:56)',
    '21. Back to the Earth (4:24)',
    '22. Ocean Kingdom (2:20)'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TsongsPage');
  }

}
