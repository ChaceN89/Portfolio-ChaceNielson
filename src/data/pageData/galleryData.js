/**
 * @file galleryData.js
 * @module galleryData
 * @desc Contains data for the gallery photos used in various parts of the application.
 * Each photo entry includes the filename and a blurhash for optimized loading.
 * 
 * @see {@link https://blurha.sh/ | BlurHash Website} - For generating BlurHashes
 * @see {@link https://www.npmjs.com/package/react-blurhash | React BlurHash Library}
 * 
 * @example
 * // Example usage of galleryPhotos in a component
 * import { galleryPhotos } from './galleryData';
 * 
 * function Gallery() {
 *   return (
 *     <div>
 *       {galleryPhotos.map((photo, index) => (
 *         <div key={index}>
 *           <img src={process.env.PUBLIC_URL + '/gallery-photos/' + photo.photo} alt={`Photo ${index + 1}`} />
 *           <Blurhash hash={photo.blurhash} />
 *         </div>
 *       ))}
 *     </div>
 *   );
 * }
 * 
 * @exports galleryPhotos
 * 
 * @author Chace Nielson
 * @since 2.1
 * @created 2024-07-28
 * @updated 2024-07-28
 */

export const galleryPhotos = [
  { photo: "snowboard7.jpg", blurhash: "LJI$8AfltR%N00ogV@j]W?RijZRj" },
  { photo: "temple2.jpg", blurhash: "LbFP$~WBogoL?wRjayWX$~jZofoe" },
  { photo: "backpacking2.jpg", blurhash: "CGBzRjM{Dhog?wM{Mwj[" },
  { photo: "iceClimbing.jpg", blurhash: "LSEy*~pMt:M|top1XBRlI8$~xVoe" },
  { photo: "climb2.jpg", blurhash: "C,EWXoxYt7f6.Tt6oef6" },

  { photo: "westCoast3.jpg", blurhash: "LyEgOR${oIayt:sjocWCs;s+jrj]" },
  { photo: "guitar3.jpg", blurhash: "LFHBPPozR%%2%xjIxtr:~CIUM|I[" },
  { photo: "mountains8.jpg", blurhash: "LeFrkyt7TJIpAKR*R5xa.TWoxZni" },
  { photo: "mountains3.jpg", blurhash: "LXEfvu9a#ND*%js+ekM|D%s-xut7" },
  { photo: "westCoast1.jpg", blurhash: "LEFY.9x]Vrnz0eI:Vtt6?Ft5N2Si" },
  { photo: "mountains6.jpg", blurhash: "LgA^wt%ht8s.kvt8ohbHOdWFR.WV" },
  { photo: "climb1.jpg", blurhash: "CtDcwLR-ogRj.AWFkCV@" },
  { photo: "surfing1.jpg", blurhash: "LuD18PadogoJyGWBjsayR;jtaxa#" },
  { photo: "climb5.jpg", blurhash: "CDCGV]T3kZkWyG.A-=t6" },
  { photo: "snowboard6.jpg", blurhash: "L5I}*R4TtR_N00DiIU-;00^+^+00" },
  { photo: "westCoast15.jpg", blurhash: "LwIh:KaxofRj?wfQayj[ofj[aeof" },
  { photo: "snowboard5.jpg", blurhash: "LPLhGPxu9G-:~SxuE1xu_2xtofWB" },
  { photo: "kayak2.jpg", blurhash: "LSHx1-8|Fy%1UGkW$+oc~D$*NaSy" },
  { photo: "biking1.jpg", blurhash: "LYCsp,R:s.t7?dWZf5s:.AWZaeoe" },
  { photo: "climbing1.jpg", blurhash: "L8CsX7~V%gIAI;IT%gjX?bIAxvWA" },
  { photo: "snowboard4.jpg", blurhash: "LEFsiX%M9F9GrSt8D*D%?aW=NGIA" },
  { photo: "westCoast14.jpg", blurhash: "L*E47nxVoIayt:sQoJWCs;s+jrj]" },
  { photo: "climb4.jpg", blurhash: "CMB#V*8wn1tnT5%hMvRN" },
  { photo: "westCoast10.jpg", blurhash: "LlFZKbD*oLa#lCWCoJa#XBoLWBay" },
  { photo: "snowboard1.jpg", blurhash: "LQJ[YfIqxuIT~paxRjRl9IIVs+bI" },
  { photo: "westCoast11.jpg", blurhash: "LxH_[MM{WCf7_4WBWBj[t7t7axj[" },
  { photo: "westCoast2.jpg", blurhash: "L$CkAMS6s.WXk]WroJWVRVjFayjt" },
  { photo: "climb3.jpg", blurhash: "CEE.z.~V00IUx]-p-pWX" },
  { photo: "westCoast9.jpg", blurhash: "L:I6D[spW=WY_Mofn~jY%gadoLoL" },
  { photo: "climbing5.jpg", blurhash: "LRD,4aNGt7WB_4WBj[WB-=M{WBWB" },
  { photo: "westCoast13.jpg", blurhash: "LaE.a]%1fit60hR*oeWW?FayWVay" },
  { photo: "candid5.jpg", blurhash: "LRG+UPozj[RkcbozofWB_3WXf5WB" },
  { photo: "westCoast23.jpg", blurhash: "LcBN+%ROoco#.AV@jsogNIV@axj]" },
  { photo: "westCoast20.jpg", blurhash: "LOHmDh{$TENH7=F_OUspOWOSogV@" },
  { photo: "iceClimbing1.jpg", blurhash: "LFC%N%008_.8M_RjRPt7xbkCx]IU" },
  { photo: "iceClimbing2.jpg", blurhash: "LOF6kG?HRPxu~W?axutQ_3-;t7og" },
  { photo: "mountains7.jpg", blurhash: "LmEy=DNHt8az%%RkogWC%hWEj?R*" },
  { photo: "basketball1.jpg", blurhash: "LQKchLIWW9In0goxShSg56Mxt8og" },
  { photo: "backpacking5.jpg", blurhash: "LXC?+nv^S*M{FkW8WYWCnno$ngo#" },
  { photo: "backpacking3.jpg", blurhash: "LTFrw|D%ozNG~pM{j[V@~WV@t8j]" },
  { photo: "backpacking6.jpg", blurhash: "LCF~X6IAR3IA?JD%kERk~o9FI@W=" },
  { photo: "climbing2.jpg", blurhash: "LmE{%}?bWAt7?w%NRjogkEM|M{of" },
  { photo: "climbing3.jpg", blurhash: "LDG92300ng%M01D%emo#?d-;9FM|" },
  { photo: "climbing6.jpg", blurhash: "L8GIT8000d9[_4t9IUxr.S4-Di4U" },
  { photo: "japan9.jpg", blurhash: "LADk+2L1:jE0~Dt8Egn52ca1I:WB" },
];
