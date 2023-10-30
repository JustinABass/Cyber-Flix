# puts 'Seeding Users...💦'
user1 = User.create!(username: 'KayleeSunShine16', user_avatar: 'https://variety.com/wp-content/uploads/2022/12/MCDBIOF_WB023-e1670425121649.jpg?w=1000&h=563&crop=1', password_digest: '$2a$10$1Dz/251TJFnPrNJg6/r5DuBR4L.ElGhX7ykI6zl3G7PZjftjHcGsC')#sun
user2 = User.create!(username: 'JBass6036', user_avatar: 'https://www.giantfreakinrobot.com/wp-content/uploads/2022/06/jack-sparrow-johnny-depp.jpg', password_digest: '$2a$10$E.GJwq/huOR0QnSsY.Fybe1PjMrsp5Y8tR.gnDEnMfdlHrDkViVnS')#pirate
user3 = User.create!(username: 'WonderGal6789', user_avatar: 'https://static.independent.co.uk/2023/08/11/16/newFile-4.jpg?width=1200&height=1200&fit=crop', password_digest: '$2a$10$3KbGD/m5mNlECPzFcMcjb.mjSWdEitxRoyOnA1GDbbaCY38TxYAb.')#wonder
user4 = User.create!(username: 'Doom6036', user_avatar: 'https://media.wired.com/photos/599dd02bf2c93452115817e9/16:9/w_2207,h_1241,c_limit/joker-FA.jpg', password_digest: '$2a$10$ZFjFesh0XsF4YtxchGWPs.vT.JASfCGYLWoK29oZ/3ylViaMirisy')#joke



# puts 'Seeding Movies...💦'
movie1 = Movie.create!(title: 'Fight Club', poster: 'https://i.etsystatic.com/18242346/r/il/c9908e/2412674268/il_fullxfull.2412674268_1sgm.jpg', trailer: 'https://www.youtube.com/embed/O1nDozs-LxI?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=O1nDozs-LxI', year: '1999', genre: 'Action', new_release: true, trending_now: false, popular: false)
movie2 = Movie.create!(title:'Once Upon A Time In... Hollywood', poster: 'https://media1.popsugar-assets.com/files/thumbor/4mdS39OwGWL-9Xe9lnrAZADfDVQ=/fit-in/792x1173/filters:format_auto():upscale()/2019/07/25/698/n/1922283/ccc67b4e608a49f7_MCDONUP_EC193.jpg', trailer: 'https://www.youtube.com/embed/ELeMaP8EPAA?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=ELeMaP8EPAA', year: '2019', genre: 'Comedy', new_release: false, trending_now: true, popular: false)
movie3 = Movie.create!(title: 'Bullet Train', poster: 'https://myhotposters.com/cdn/shop/products/mL6269_1024x1024.jpg?v=1662723620', trailer: 'https://www.youtube.com/embed/EGeJczJvWns?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=EGeJczJvWns', year: '2022', genre: 'Action', new_release: false, trending_now: false, popular: true)
movie4 = Movie.create!(title: 'By The Sea', poster: 'https://picfiles.alphacoders.com/781/78139.jpg', trailer: 'https://www.youtube.com/embed/y08gxV5tHUQ?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=y08gxV5tHUQ', year: '2015', genre: 'Romance', new_release: true, trending_now: false, popular: false)
movie5 = Movie.create!(title: 'Babylon', poster: 'https://i.etsystatic.com/41716657/r/il/666b03/4791235809/il_fullxfull.4791235809_8t5r.jpg', trailer: 'https://www.youtube.com/embed/5muQK7CuFtY?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=5muQK7CuFtY', year: '2022', genre: 'Drama', new_release: false, trending_now: true, popular: false)
movie6 = Movie.create!(title: 'Fury', poster: 'https://static.displate.com/857x1200/displate/2021-05-17/a3937ad260e14700771f001c712d643d_69dde057a17923e989e59d6ae3680a5d.jpg', trailer: 'https://www.youtube.com/embed/86Fhr-qthTo?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=86Fhr-qthTo', year: '2014', genre: 'Action', new_release: false, trending_now: false, popular: true)

movie7 = Movie.create!(title: 'Black Swan', poster: 'https://i.etsystatic.com/41088122/r/il/fa18b0/5409070373/il_1588xN.5409070373_q63v.jpg', trailer: 'https://www.youtube.com/embed/5jaI1XOB-bs?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=5jaI1XOB-bs', year: '2010', genre: 'Drama', new_release: true, trending_now: false, popular: false)
movie8 = Movie.create!(title: 'V For Vendetta', poster: 'https://images.moviesanywhere.com/c2c7c4ce4949e34d671b0c843f7e10d5/ddfa7bb3-ad2a-4d74-9ab4-8cd6cef6b24b.jpg', trailer: 'https://www.youtube.com/embed/lSA7mAHolAw?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=lSA7mAHolAw', year: '2006', genre: 'Thriller', new_release: false, trending_now: true, popular: false)
movie9 = Movie.create!(title: 'Jackie', poster: 'https://m.media-amazon.com/images/M/MV5BMzg4MjYzNjk5N15BMl5BanBnXkFtZTgwODgwODI3MDI@._V1_.jpg', trailer: 'https://www.youtube.com/embed/g9pW3B8Ycc4?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=g9pW3B8Ycc4', year: '2016', genre: 'Drama', new_release: false, trending_now: false, popular: true)
movie10 = Movie.create!(title: 'Thor: Love And Thunder', poster: 'https://i.etsystatic.com/20512669/r/il/f4ef53/3942207771/il_1588xN.3942207771_4ixf.jpg', trailer: 'https://www.youtube.com/embed/Go8nTmfrQd8?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=Go8nTmfrQd8', year: '2022', genre: 'Action', new_release: true, trending_now: false, popular: false)
movie11 = Movie.create!(title: 'The Other Boleyn Girl', poster: 'https://i.etsystatic.com/41088122/r/il/469579/4768230049/il_fullxfull.4768230049_h0g2.jpg', trailer: 'https://www.youtube.com/embed/M44ZHmPoLSU?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=M44ZHmPoLSU', year: '2008', genre: 'Romance', new_release: false, trending_now: true, popular: false)
movie12 = Movie.create!(title: 'Brothers', poster: 'https://flxt.tmsimg.com/assets/p182461_p_v8_an.jpg', trailer: 'https://www.youtube.com/embed/0Jvi7OcEQWM?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=0Jvi7OcEQWM', year: '2009', genre: 'Drama', new_release: false, trending_now: false, popular: true)


movie13 = Movie.create!(title: 'Prince of Persia: The Sands of Time', poster: 'https://cdn.europosters.eu/image/750/posters/prince-of-persia-sands-of-time-i7259.jpg', trailer: 'https://www.youtube.com/embed/bZ7Li5w2I-k?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=bZ7Li5w2I-k', year: '2010', genre: 'Action', new_release: true, trending_now: false, popular: false)
movie14 = Movie.create!(title: 'Love & Other Drugs', poster: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/a59e9af66c46ac0c1090792d226049a84429e52c8e269268d532040c67bf71dc._RI_TTW_.jpg', trailer: 'https://www.youtube.com/embed/h6w7Dh-QxzY?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=h6w7Dh-QxzY', year: '2010', genre: 'Romance', new_release: false, trending_now: true, popular: false)
movie15 = Movie.create!(title: 'Stronger', poster: 'https://i.pinimg.com/1200x/db/a1/6d/dba16d98e11313f3e9142b85b4e144e8.jpg', trailer: 'https://www.youtube.com/embed/I6MN0QfQx7I?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=I6MN0QfQx7I', year: '2017', genre: 'Drama', new_release: false, trending_now: false, popular: true)
movie16 = Movie.create!(title: 'Brokeback Mountain', poster: 'https://assets.scriptslug.com/live/img/posters/brokeback-mountain-2005.jpg', trailer: 'https://www.youtube.com/embed/z89xU8l5wn8?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=z89xU8l5wn8', year: '2005', genre: 'Romance', new_release: true, trending_now: false, popular: false)
movie17 = Movie.create!(title: 'Donnie Darko', poster: 'https://www.santamonica.com/wp-content/uploads/2017/04/Donnie-Darko.jpg', trailer: 'https://www.youtube.com/embed/bzLn8sYeM9o?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=bzLn8sYeM9o', year: '2001', genre: 'Drama', new_release: false, trending_now: true, popular: false)
movie18 = Movie.create!(title: 'NIGHTCRAWLER', poster: 'https://m.media-amazon.com/images/I/612SNEBDltL._AC_UF894,1000_QL80_.jpg', trailer: 'https://www.youtube.com/embed/u1uP_8VJkDQ?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=u1uP_8VJkDQ', year: '2014', genre: 'Drama', new_release: false, trending_now: false, popular: true)

movie19 = Movie.create!(title: 'Bewitched', poster: 'https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/chameleon/title-movie/230935_BEWITCHED%20%282005%29_1400x2100_English_1.jpg?itok=jBcOqcu-', trailer: 'https://www.youtube.com/embed/hS05j44UKUU?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=hS05j44UKUU', year: '2005', genre: 'Comedy', new_release: true, trending_now: false, popular: false)
movie20 = Movie.create!(title: 'Practical Magic', poster: 'https://m.media-amazon.com/images/I/51dFT9ajB1L._AC_UF894,1000_QL80_.jpg', trailer: 'https://www.youtube.com/embed/R7uixLkpjPs?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=R7uixLkpjPs', year: '1998', genre: 'Romance', new_release: false, trending_now: true, popular: false)
movie21 = Movie.create!(title: 'The Northman', poster: 'https://image.tmdb.org/t/p/original/aSSJMnHknzKjlZ6zybwD7eyJ4Po.jpg', trailer: 'https://www.youtube.com/embed/oMSdFM12hOw?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=oMSdFM12hOw', year: '2022', genre: 'Action', new_release: false, trending_now: false, popular: true)
movie22 = Movie.create!(title: 'The Paperboy', poster: 'https://image.tmdb.org/t/p/original/AiALtw5Nl4adb6oO4VndBPo3RkQ.jpg', trailer: 'https://www.youtube.com/embed/m2GMwWaDSr0?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=m2GMwWaDSr0', year: '2012', genre: 'Thriller', new_release: true, trending_now: false, popular: false)
movie23 = Movie.create!(title: 'The Golden Compass', poster: 'https://i.etsystatic.com/41088122/r/il/e1c4ea/4732512185/il_1588xN.4732512185_8yak.jpg', trailer: 'https://www.youtube.com/embed/LHYoOGfBObU?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=LHYoOGfBObU', year: '2007', genre: 'Adventure', new_release: false, trending_now: true, popular: false)
movie24 = Movie.create!(title: 'The Others', poster: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/5282fa81438ec1a90c318ead4625fe23e5522a3a307f0f0610db9d27d13b6c39._RI_TTW_.jpg', trailer: 'https://www.youtube.com/embed/C7pKqaPtMiA?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=C7pKqaPtMiA', year: '2001', genre: 'Horror', new_release: false, trending_now: false, popular: true)

movie25 = Movie.create!(title: 'Oppenheimer', poster: 'https://m.media-amazon.com/images/I/71xDtUSyAKL._AC_UF894,1000_QL80_.jpg', trailer: 'https://www.youtube.com/embed/uYPbbksJxIg?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=uYPbbksJxIg', year: '2023', genre: 'Drama', new_release: true, trending_now: false, popular: false)
movie26 = Movie.create!(title: 'Dr. Dolittle', poster: 'https://i.ebayimg.com/images/g/uiYAAOSwEUdicV92/s-l1200.jpg', trailer: 'https://www.youtube.com/embed/FEf412bSPLs?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=FEf412bSPLs', year: '2020', genre: 'Adventure', new_release: false, trending_now: true, popular: false)
movie27 = Movie.create!(title: 'Iron Man', poster: 'https://i.etsystatic.com/37635282/r/il/0550a0/4164530264/il_fullxfull.4164530264_8o71.jpg', trailer: 'https://www.youtube.com/embed/8ugaeA-nMTc?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=8ugaeA-nMTc', year: '2008', genre: 'Action', new_release: false, trending_now: false, popular: true)
movie28 = Movie.create!(title: 'Tropic Thunder', poster: 'https://i.ebayimg.com/images/g/wEsAAOSwwfBi7v-W/s-l1600.jpg', trailer: 'https://www.youtube.com/embed/CnmGp-0n9HA?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=CnmGp-0n9HA', year: '2008', genre: 'Comedy', new_release: true, trending_now: false, popular: false)
movie29 = Movie.create!(title: 'The Avengers', poster: 'https://m.media-amazon.com/images/I/71u9+g9J1pL._AC_UF894,1000_QL80_.jpg', trailer: 'https://www.youtube.com/embed/eOrNdBpGMv8?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=eOrNdBpGMv8', year: '2012', genre: 'Action', new_release: false, trending_now: true, popular: false)
movie30 = Movie.create!(title: 'Zodiac', poster: 'https://i.etsystatic.com/41088122/r/il/518189/4862217519/il_1588xN.4862217519_ptvi.jpg', trailer: 'https://www.youtube.com/embed/yNncHPl1UXg?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=yNncHPl1UXg', year: '2007', genre: 'Drama', new_release: false, trending_now: false, popular: true)

movie31 = Movie.create!(title: 'Snow White & The Huntsman', poster: 'https://images.moviesanywhere.com/a4a858ce8827af58f45e6146203f5d86/f4f9c569-3f84-4c96-89f0-0c6522a47cdc.jpg', trailer: 'https://www.youtube.com/embed/F9cBVm9gtKU?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=F9cBVm9gtKU', year: '2012', genre: 'Drama', new_release: true, trending_now: false, popular: false)
movie32 = Movie.create!(title: 'Long Shot', poster: 'https://musicart.xboxlive.com/7/6e135100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080', trailer: 'https://www.youtube.com/embed/S5jiaHvx-kY?vq=hd1080&autoplay=1&loop=1&playlist=S5jiaHvx-kY', year: 2019, genre: 'Romance', new_release: false, trending_now: true, popular: false)
movie33 = Movie.create!(title: 'Atomic Blonde', poster: 'https://image.tmdb.org/t/p/original/ubdfqMYbHSUP1J0H3KL50DGn4i4.jpg', trailer: 'https://www.youtube.com/embed/IGDdv88uJsQ?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=IGDdv88uJsQ', year: '2017', genre: 'Action', new_release: false, trending_now: false, popular: true)
movie34 = Movie.create!(title: 'AEon Flux', poster: 'https://i.ebayimg.com/images/g/RUIAAOSw-INbW3aR/s-l1600.jpg', trailer: 'https://www.youtube.com/embed/f0XQB6j5gpg?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=f0XQB6j5gpg', year: '2005', genre: 'Action', new_release: true, trending_now: false, popular: false)
movie35 = Movie.create!(title: 'Hancock', poster: 'https://media-cache.cinematerial.com/p/500x/bhvzsjfh/hancock-movie-cover.jpg?v=1476522594', trailer: 'https://www.youtube.com/embed/KS5E8r82l2g?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=KS5E8r82l2g', year: '2008', genre: 'Action', new_release: false, trending_now: true, popular: false)
movie36 = Movie.create!(title: 'Tully', poster: 'https://m.media-amazon.com/images/M/MV5BMTU0OTM4NTMyMF5BMl5BanBnXkFtZTgwNDA5MzUwNTM@._V1_.jpg', trailer: 'https://www.youtube.com/embed/e5D3O4yCmCg?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=e5D3O4yCmCg', year: '2018', genre: 'Drama', new_release: false, trending_now: false, popular: true)

movie37 = Movie.create!(title: 'Dune', poster: 'https://npr.brightspotcdn.com/legacy/sites/kunr/files/202110/dune_2021.jpg', trailer: 'https://www.youtube.com/embed/n9xhJrPXop4?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=n9xhJrPXop4', year: '2021', genre: 'Drama', new_release: true, trending_now: false, popular: false)
movie38 = Movie.create!(title: 'Call Me By Your Name', poster: 'https://m.media-amazon.com/images/M/MV5BNDk3NTEwNjc0MV5BMl5BanBnXkFtZTgwNzYxNTMwMzI@._V1_.jpg', trailer: 'https://www.youtube.com/embed/Z9AYPxH5NTM?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=Z9AYPxH5NTM', year: '2017', genre: 'Romance', new_release: false, trending_now: true, popular: false)
movie39 = Movie.create!(title: 'Beautiful Boy', poster: 'https://images-worker.bonanzastatic.com/afu/images/7b13/f610/0b97_7158699116/__57.jpg', trailer: 'https://www.youtube.com/embed/8NR8w8s9zWA?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=8NR8w8s9zWA', year: '2018', genre: 'Drama', new_release: false, trending_now: false, popular: true)
movie40 = Movie.create!(title: 'Wonka', poster: 'https://i.ebayimg.com/images/g/x~UAAOSwPxlkr~c-/s-l1600.jpg', trailer: 'https://www.youtube.com/embed/wYmtRhKvmVE?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=wYmtRhKvmVE', year: '2023', genre: 'Adventure', new_release: true, trending_now: false, popular: false)
movie41 = Movie.create!(title: 'Little Women', poster: 'https://m.media-amazon.com/images/I/91MCxPWGWqL._AC_SY679_.jpg', trailer: 'https://www.youtube.com/embed/AST2-4db4ic?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=AST2-4db4ic', year: '2019', genre: 'Drama', new_release: false, trending_now: true, popular: false)
movie42 = Movie.create!(title: 'The King', poster: 'https://image.tmdb.org/t/p/w440_and_h660_face/8u0QBGUbZcBW59VEAdmeFl9g98N.jpg', trailer: 'https://www.youtube.com/embed/9GvLKjZbxCQ?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=9GvLKjZbxCQ', year: '2019', genre: 'Drama', new_release: false, trending_now: false, popular: true)

movie43 = Movie.create!(title: 'The Devil Wears Prada', poster: 'https://images.moviesanywhere.com/7d5b5a3f54bc2a1ce56086be09bbd80a/56033e26-bce5-422c-baf6-b3b5b886fd1d.jpg', trailer: 'https://www.youtube.com/embed/6ZOZwUQKu3E?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=6ZOZwUQKu3E', year: '2006', genre: 'Comedy', new_release: true, trending_now: false, popular: false)
movie44 = Movie.create!(title: 'Ocean\'s 8', poster: 'https://i.ebayimg.com/images/g/UgAAAOSw3JhjBdxc/s-l1600.jpg', trailer: 'https://www.youtube.com/embed/MFWF9dU5Zc0?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=MFWF9dU5Zc0', year: '2018', genre: 'Comedy', new_release: false, trending_now: true, popular: false)
movie45 = Movie.create!(title: 'The Hustle', poster: 'https://m.media-amazon.com/images/I/61kYfihrr4S.jpg', trailer: 'https://www.youtube.com/embed/_j5hwooOHVE?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=_j5hwooOHVE', year: '2019' , genre: 'Crime', new_release: false, trending_now: false, popular: true)
movie46 = Movie.create!(title: 'Alice In Wonderland', poster: 'https://i.pinimg.com/474x/f8/ac/c4/f8acc4a028cf294621a8c873c8f9aaff.jpg', trailer: 'https://www.youtube.com/embed/P_IVeP3i7B0?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=P_IVeP3i7B0', year: '2010', genre: 'Adventure', new_release: true, trending_now: false, popular: false)
movie47 = Movie.create!(title: 'Les Miserables', poster: 'https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/294380/3922431/apirxegq3__90193.1625622671.jpg?c=2', trailer: 'https://www.youtube.com/embed/YmvHzCLP6ug?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=YmvHzCLP6ug', year: '2012', genre: 'Drama', new_release: false, trending_now: true, popular: false)
movie48 = Movie.create!(title: 'Get Smart', poster: 'https://image.tmdb.org/t/p/original/c1x9EYmTTe9xTM8DclELORwC1PN.jpg', trailer: 'https://www.youtube.com/embed/K9WNBO3szgQ?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=K9WNBO3szgQ', year: '2008', genre: 'Action', new_release: false, trending_now: false, popular: true)

movie49 = Movie.create!(title: 'Ghosts Of Girlfriends Past' , poster: 'https://m.media-amazon.com/images/S/pv-target-images/c67ec60fdce8151c811475bb5d82ef22cd251df383b507bdbed251b8caf908b5.jpg', trailer: 'https://www.youtube.com/embed/LUUIY7Fnzts?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=LUUIY7Fnzts', year: '2009', genre: 'Comedy', new_release: true, trending_now: false, popular: false)
movie50 = Movie.create!(title: 'The Beach Bum', poster: 'https://m.media-amazon.com/images/M/MV5BMTY3MDUzMTAzOV5BMl5BanBnXkFtZTgwNDk3ODQyNzM@._V1_.jpg', trailer: 'https://www.youtube.com/embed/qSALRP1mZNQ?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=qSALRP1mZNQ', year: '2019', genre: 'Comedy', new_release: false, trending_now: true, popular: false)
movie51 = Movie.create!(title: 'Dallas Buyers Club', poster: 'https://i.pinimg.com/736x/f8/6d/7f/f86d7fa3c2e685857d85106712aacbef.jpg', trailer: 'https://www.youtube.com/embed/BhFYcnRPEfA?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=BhFYcnRPEfA', year: '2013', genre: 'Drama', new_release: false, trending_now: false, popular: true)
movie52 = Movie.create!(title: 'The Wolf of Wall Street', poster: 'https://image.tmdb.org/t/p/original/3510HNgfSUegvMpy09sMfwFtvNM.jpg', trailer: 'https://www.youtube.com/embed/iszwuX1AK6A?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=iszwuX1AK6A', year: '2013', genre: 'Drama', new_release: true, trending_now: false, popular: false)
movie53 = Movie.create!(title: 'How to Lose a Guy in 10 Days', poster: 'https://image.tmdb.org/t/p/original/1B59sdPkTfl8DdOg4qWnDTe8iZ5.jpg', trailer: 'https://www.youtube.com/embed/2ZMGk_Ml1fc?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=2ZMGk_Ml1fc', year: '2003', genre: 'Romance', new_release: false, trending_now: true, popular: false)
movie54 = Movie.create!(title: 'The Gentlemen', poster: 'https://m.media-amazon.com/images/I/9117epfejgL.jpg', trailer: 'https://www.youtube.com/embed/Ify9S7hj480?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=Ify9S7hj480', year: '2019', genre: 'Crime', new_release: false, trending_now: false, popular: true)

movie55 = Movie.create!(title: 'Red Sparrow', poster: 'https://myhotposters.com/cdn/shop/products/mL1443_1024x1024.jpg?v=1571445436', trailer: 'https://www.youtube.com/embed/PmUL6wMpMWw?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=PmUL6wMpMWw', year: '2018', genre: 'Thriller', new_release: true, trending_now: false, popular: false)
movie56 = Movie.create!(title: 'Passengers', poster: 'https://m.media-amazon.com/images/I/61QdA6LZN7L._AC_UF894,1000_QL80_.jpg', trailer: 'https://www.youtube.com/embed/7BWWWQzTpNU?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=7BWWWQzTpNU', year: '2016', genre: 'Drama', new_release: false, trending_now: true, popular: false)
movie57 = Movie.create!(title: 'Silver Linings', poster: 'https://m.media-amazon.com/images/M/MV5BMTM2MTI5NzA3MF5BMl5BanBnXkFtZTcwODExNTc0OA@@._V1_.jpg', trailer: 'https://www.youtube.com/embed/kVS-6k2tQAA?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=kVS-6k2tQAA', year: '2012', genre: 'Romance', new_release: false, trending_now: false, popular: true)
movie58 = Movie.create!(title: 'Mother', poster: 'https://m.media-amazon.com/images/M/MV5BMzc5ODExODE0MV5BMl5BanBnXkFtZTgwNDkzNDUxMzI@._V1_.jpg', trailer: 'https://www.youtube.com/embed/L3VhpO0l7qw?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=L3VhpO0l7qw', year: '2017', genre: 'Horror', new_release: true, trending_now: false, popular: false)
movie59 = Movie.create!(title: 'American Hustle', poster: 'https://flxt.tmsimg.com/assets/p10016553_p_v10_al.jpg', trailer: 'https://www.youtube.com/embed/NqgjPRNRDSY?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=NqgjPRNRDSY', year: '2013', genre: 'Crime', new_release: false, trending_now: true, popular: false)
movie60 = Movie.create!(title: 'JOY', poster: 'https://i.ebayimg.com/images/g/UgIAAOSwegljDJ~u/s-l1600.jpg', trailer: 'https://www.youtube.com/embed/uR-2TiQVY-k?vq=hd1080&autoplay=1&loop=1&rel=0&playlist=uR-2TiQVY-k', year: '2015', genre: 'Drama', new_release: false, trending_now: false, popular: true)

# puts 'Seeding Actors...💦'
#brad fight
actor1 = Actor.create!(actor: 'Brad Pitt', image: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/05/01/16829651070526.jpg')
actor2 = Actor.create!(actor: 'Edward Norton', image: 'https://www.indiewire.com/wp-content/uploads/2016/10/edward-norton.jpg')
actor3 = Actor.create!(actor: 'Jared Leto', image: 'https://d.newsweek.com/en/full/2002962/jared-leto.jpg')

#brad hollywood
actor4 = Actor.create!(actor: 'Leonardo DiCaprio', image: 'https://phantom-marca.unidadeditorial.es/d3a6191c79675a2a415d3f213acea461/resize/828/f/jpg/assets/multimedia/imagenes/2023/02/17/16766087877898.jpg')
actor5 = Actor.create!(actor: 'Margot Robbie', image: 'https://assets.vogue.com/photos/5cf7ed4504f90a017a26d60f/1:1/w_2291,h_2291,c_limit/5-things-to-know-about-margot-robbie.jpg')

#brad bullet
actor6 = Actor.create!(actor: 'Aaron Taylor-Johnson', image: 'https://labande-annonce.fr//www-site/uploads/2015/01/aaron-t-johnson-640x960.jpg')
actor7 = Actor.create!(actor: 'Joey King', image: 'https://media.glamourmagazine.co.uk/photos/62c3fdc20b16f0c12c6fc864/4:3/w_1920,h_1440,c_limit/JOEY%20KING%20050722%20default-sq-GettyImages-1403365386.jpg')

#brad by the sea
actor8 = Actor.create!(actor: 'Angelina Jolie', image: 'https://people.com/thmb/NyxzD8BxHDk0hekBM4hvLgvykWg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(771x0:773x2)/angelina-jolie1-2d2e5526559a485588cbf8873af5f2af.jpg')
actor9 = Actor.create!(actor: 'Melanie Laurent', image: 'https://fr.web.img6.acsta.net/pictures/18/09/06/16/40/1315675.jpg')

#brad Babylon
actor10 = Actor.create!(actor: 'Tobey Maguire', image: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Tobey_Maguire_2014.jpg')

#brad fury
actor11 = Actor.create!(actor: 'Alicia Von Rittberg', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/2018-01-26-DFP_2018-7082.jpg/640px-2018-01-26-DFP_2018-7082.jpg')
actor12 = Actor.create!(actor: 'Jon Bernthal', image: 'https://fwcdn.pl/ppo/01/14/290114/450149.3.jpg')

#natalie black swan
actor13 = Actor.create!(actor: 'Natalie Portman', image: 'https://i.imgur.com/VneHMRq.jpg')
actor14 = Actor.create!(actor: 'Mila Kunis', image: 'https://hips.hearstapps.com/hmg-prod/images/mila-kunis-attends-the-premiere-of-netflixs-luckiest-girl-news-photo-1669826911.jpg?crop=0.66667xw:1xh;center,top&resize=1200:*')
actor15 = Actor.create!(actor: 'Vincent Cassel', image: 'https://m.media-amazon.com/images/M/MV5BMTc1NDUzMzM5MV5BMl5BanBnXkFtZTcwNzY1OTYyOQ@@._V1_.jpg')

#natalie v for ven
actor16 = Actor.create!(actor: 'Hugo Weaving', image: 'https://ntvb.tmsimg.com/assets/assets/27163_v9_bb.jpg')
actor17 = Actor.create!(actor: 'Stephen Fry', image: 'https://people.com/thmb/Z8Cqu9IgMeV_vrL_rvnR2vdM6Fk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/Stephen-Fry-hospital-092023-tout-71ef3b5495414caaa01e57a4beecc6d0.jpg')

#natalie jackie
actor18 = Actor.create!(actor: 'Greta Gerwig', image: 'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-12/Greta-Gerwig-today-inline-221201-4225be.jpg')
actor19 = Actor.create!(actor: 'Peter Sarsgaard', image: 'https://es.web.img3.acsta.net/pictures/15/12/23/14/20/157530.jpg')

#natalie thor
actor20 = Actor.create!(actor: 'Chris Hemsworth', image: 'https://www.refinery29.com/images/8981405.jpg')
actor21 = Actor.create!(actor: 'Christian Bale', image: 'https://media.vanityfair.com/photos/54cace39b8f23e3a0315bf42/master/w_2560%2Cc_limit/image.jpg')

#natalie boelyn
actor22 = Actor.create!(actor: 'Scarlett Johansson', image: 'https://hips.hearstapps.com/hmg-prod/images/scarlett-johansson-attends-the-premiere-of-illuminations-news-photo-1639390369.jpg')
actor23 = Actor.create!(actor: 'Eric Bana', image: 'https://www.hairfinder.com/celebrityhair/eric-bana-hair.jpg')

#natalie brothers
actor24 = Actor.create!(actor: 'Jake Gyllenhaal', image: 'https://magarticles.magzter.com/articles/14274/768722/61690fe3d68fb/Jake-Gyllenhaal-I-want-to-be-A-FAMILY-MAN.jpg')

#jake prince
actor25 = Actor.create!(actor: 'Gemma Arterton', image: 'https://image.tmdb.org/t/p/original/qGyGAds4FmONHNLoAcJTRALZAC6.jpg')
actor26 = Actor.create!(actor: 'Ben Kingsley', image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/06/10/10/ben-kingsley.jpg')

#jake love & other drugs
actor27 = Actor.create!(actor: 'Anne Hathaway', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Anne_Hathaway-68408_%28cropped%29.jpg/640px-Anne_Hathaway-68408_%28cropped%29.jpg')
actor28 = Actor.create!(actor: 'Oliver Platt', image: 'https://ntvb.tmsimg.com/assets/assets/49113_v9_bb.jpg')

#jake stronger
actor29 = Actor.create!(actor: 'Tatiana Maslany', image: 'https://cdn.gracza.pl/galeria/mdb/o/11223765.jpg')
actor30 = Actor.create!(actor: 'John Pollono', image: 'https://media.broadway.com/photos/original/4.192095.jpg')

#jake brokeback
actor31 = Actor.create!(actor: 'Heath Ledger', image: 'https://cdn.britannica.com/42/123642-050-7D2AD1BF/Heath-Ledger-2006.jpg')
actor32 = Actor.create!(actor: 'Michelle Williams', image: 'https://hips.hearstapps.com/hmg-prod/images/michelle-williams-critics-choice-awards-1673866278.jpg')

#jake donnie
actor33 = Actor.create!(actor: 'Maggie Gyllenhaal', image: 'https://fr.web.img4.acsta.net/pictures/15/10/21/10/48/401053.jpg')
actor34 = Actor.create!(actor: 'Drew Barrymore', image: 'https://media.vanityfair.com/photos/647f55a245ff6fb6fdb109a1/1:1/w_1428,h_1428,c_limit/Drew-Barrymore.jpg')

#jake night
actor35 = Actor.create!(actor: 'Rene Russo', image: 'https://vz.cnwimg.com/wp-content/uploads/2011/03/Rene-Russo.jpg')
actor36 = Actor.create!(actor: 'Riz Ahmed', image: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-628862500.jpg')

#nicole bewitched
actor37 = Actor.create!(actor: 'Nicole Kidman', image: 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_15/1702367/nicole-kidman-mc-square-210415.jpg')
actor38 = Actor.create!(actor: 'Will Ferrell', image: 'https://cdn.britannica.com/43/219743-050-DA91906B/American-actor-and-writer-Will-Ferrell-2015.jpg')
actor39 = Actor.create!(actor: 'Steve Carell', image: 'https://m.media-amazon.com/images/M/MV5BMjMyOTM2OTk1Ml5BMl5BanBnXkFtZTgwMTI3MzkyNjM@._V1_.jpg')

#nicole practical
actor40 = Actor.create!(actor: 'Sandra Bullock', image: 'https://www.emdria.org/wp-content/uploads/2021/12/Sandra-Bullock-Shutterstock-scaled.jpg')
actor41 = Actor.create!(actor: 'Alexandra Artrip', image: 'https://static.accessonline.com/uploads/assets/articles/147070.jpg')

#nicole northman
actor42 = Actor.create!(actor: 'Alexander Skarsgard', image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Alexander_Skarsgard_%2829485267411%29_%28cropped%29.jpg')
actor43 = Actor.create!(actor: 'Anya Taylor-Joy', image: 'https://www.denofgeek.com/wp-content/uploads/2020/12/webstory-anya-taylor-crop.GettyImages-1207186878.jpg')

#nicole paperboy
actor44 = Actor.create!(actor: 'Zac Efron', image: 'https://www.instyle.com/thmb/dmKmnx2hbikgnpmqdOSbrLIRwD0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/100715-zac-efron-birthday-2000-9ccbd71883a747109c9037904b638d06.jpg')
actor45 = Actor.create!(actor: 'Mathew McConaughey', image: 'https://m.media-amazon.com/images/M/MV5BMTg0MDc3ODUwOV5BMl5BanBnXkFtZTcwMTk2NjY4Nw@@._V1_FMjpg_UX1000_.jpg')

#nicole golden
actor46 = Actor.create!(actor: 'Daniel Craig', image: 'https://www.forbesindia.com/media/images/2021/Sep/img_168707_danielcraig_sm.jpg')
actor47 = Actor.create!(actor: 'Dakota Blue Richards', image: 'https://image.tmdb.org/t/p/w500/qi8YwJb9IdApRiRJFNavwnGgfBU.jpg')

#nicole others
actor48 = Actor.create!(actor: 'Alakina Mann', image: 'https://m.media-amazon.com/images/M/MV5BZThkMmE3MDItNDRlYi00N2RhLTg5NGQtMTBkNDE0NmI5M2E1XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_FMjpg_UX1000_.jpg')
actor49 = Actor.create!(actor: 'James Bentley', image: 'https://m.media-amazon.com/images/S/pv-target-images/5c9c1d7486c910fb1aa8739af22f87dc71303a37188bf4ef18b4a905476e39d9.jpg')

#robert oppenheimer
actor50 = Actor.create!(actor: 'Robert Downey Jr.', image: 'https://people.com/thmb/f6VzS30SS-K49uTx4zwDVRo46gY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(959x554:961x556)/robert-downey-jr-fa2b8be28fe64b4ca9770e01cddba5df.jpg')
actor51 = Actor.create!(actor: 'Cillian Murphy', image: 'https://ntvb.tmsimg.com/assets/assets/236083_v9_bd.jpg')
actor52 = Actor.create!(actor: 'Florence Pugh', image: 'https://cdn.britannica.com/20/217320-050-181C95DC/English-actor-Florence-Pugh-2019.jpg')

#robert dolittle
actor53 = Actor.create!(actor: 'Tom Holland', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/1200px-Tom_Holland_by_Gage_Skidmore.jpg')
actor54 = Actor.create!(actor: 'Stephen Fry', image: 'https://media.npr.org/assets/img/2020/01/24/gettyimages-1189825084-e2b9bfb8edf5bb19c84a7dd31d4afe1a503bd494.jpg')

#robert iron man
actor55 = Actor.create!(actor: 'Gwyneth Paltrow', image: 'https://cdn.britannica.com/56/172456-050-F518B29E/Gwyneth-Paltrow-2013.jpg')
actor56 = Actor.create!(actor: 'Terrance Howard', image: 'https://dailymedia.case.edu/wp-content/uploads/2012/03/18143640/Howard_CAASpeakers_Photo.jpg')

#robert tropic thunder
actor57 = Actor.create!(actor: 'Ben Stiller', image: 'https://www.themodestman.com/wp-content/uploads/2019/11/Ben-Stiller.jpg')
actor58 = Actor.create!(actor: 'Jack Black', image: 'https://images.fandango.com/ImageRenderer/300/0/redesign/static/img/default_poster.png/0/images/masterrepository/performer%20images/57633/JackBlack-2019_r.jpg')

#robert advengers
actor59 = Actor.create!(actor: 'Jeremy Renner', image: 'https://cdn.britannica.com/34/218334-050-759D83D7/American-actor-Jeremy-Renner-2017.jpg')

#robert zodiac
actor60 = Actor.create!(actor: 'Mark Ruffalo', image: 'https://cdn.britannica.com/97/219497-050-B1B58B0F/Mark-Ruffalo-2018.jpg')

#charlize snow white
actor61 = Actor.create!(actor: 'Charlize Theron', image: 'https://media.allure.com/photos/64e38f668d0cc37445505633/1:1/w_1605,h_1605,c_limit/Charlize%20Theron%20Story.jpg')
actor62 = Actor.create!(actor: 'Kristen Stewart', image: 'https://media1.popsugar-assets.com/files/thumbor/7PY5oes6wg7eckfx8j3qA-qsfdQ=/fit-in/792x1060/filters:format_auto():upscale()/2020/01/09/051/n/1922153/9eacfbd04916eb51_GettyImages-1198159009.jpg')

#charlize long shot
actor63 = Actor.create!(actor: 'Seth Rogen', image: 'https://cdn.britannica.com/18/205618-050-7CC082C1/Seth-Rogen-2019.jpg')
actor64 = Actor.create!(actor: 'June Diane Raphael', image: 'https://flxt.tmsimg.com/assets/532764_v9_bc.jpg')

#charlize atomic blonde
actor65 = Actor.create!(actor: 'Sofia Boutella', image: 'https://editorial01.shutterstock.com/preview-440/12983036ba/b59249ee/Shutterstock_12983036ba.jpg')
actor66 = Actor.create!(actor: 'James McAvoy', image: 'https://m.media-amazon.com/images/M/MV5BMTQzNzIxOTYzMl5BMl5BanBnXkFtZTcwNjYxNTk1Nw@@._V1_.jpg')

#charlize flux
actor67 = Actor.create!(actor: 'Sophie Okonedo', image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2009/08/06/14/231411.jpg')
actor68 = Actor.create!(actor: 'Marton Csokas', image: 'https://m.media-amazon.com/images/M/MV5BMjQxOTcyNDEyMV5BMl5BanBnXkFtZTgwMjMzMzYyNTE@._V1_.jpg')

#charlize hancock
actor69 = Actor.create!(actor: 'Will Smith', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg/640px-TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg')
actor70 = Actor.create!(actor: 'Jason Bateman', image: 'https://cdn.britannica.com/00/218000-050-8F3F4E83/American-actor-Jason-Bateman-2018.jpg')

#charlize tully
actor71 = Actor.create!(actor: 'Mackenzie Davis', image: 'https://flxt.tmsimg.com/assets/653750_v9_bb.jpg')
actor72 = Actor.create!(actor: 'Ron Livingston', image: 'https://m.media-amazon.com/images/M/MV5BMjIxODk2NDUzOF5BMl5BanBnXkFtZTgwNTI2ODg1NDE@._V1_FMjpg_UX1000_.jpg')

#timothee dune
actor73 = Actor.create!(actor: 'Timothee Chalamet', image: 'https://www.instyle.com/thmb/fyeWLTuVcroUvTMCBuRCW0ednR0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/010920-timothee-chalamet-lead-2000-4b1886e73e764ce68c320deacc490411.jpg')
actor74 = Actor.create!(actor: 'Zendaya', image: 'https://media1.popsugar-assets.com/files/thumbor/VxfDQAE5djpgOyuuASU5x7cS-Ug=/fit-in/3072x4368/filters:format_auto():extract_cover():upscale()/2021/11/02/955/n/1922153/da8bb4deb395a7fd_GettyImages-1193423832.jpg')
actor75 = Actor.create!(actor: 'Oscar Isaac', image: 'https://flxt.tmsimg.com/assets/493617_v9_bc.jpg')

#timothee call me by your name
actor76 = Actor.create!(actor: 'Armie Hammer', image: 'https://hollywoodlife.com/wp-content/uploads/2021/03/armie-hammer-shutterstock-01.jpg')
actor77 = Actor.create!(actor: 'Esther Garrel', image: 'https://www.themoviedb.org/t/p/w500/km79Neoe5tLwgbiBzq72pR7pdxY.jpg')

#timothee beautiful
actor78 = Actor.create!(actor: 'Amy Ryan', image: 'https://m.media-amazon.com/images/M/MV5BMTY0MTcwMzM0Nl5BMl5BanBnXkFtZTcwODIyMjM3NA@@._V1_.jpg')

#timothee wonka
actor79 = Actor.create!(actor: 'Hugh Grant', image: 'https://deadline.com/wp-content/uploads/2016/10/rexfeatures_5899228a.jpg')
actor80 = Actor.create!(actor: 'Rowan Atkinson', image: 'https://www.thesun.co.uk/wp-content/uploads/2023/02/file-photo-dated-03-10-628901309.jpg')

#timothee little woman
actor81 = Actor.create!(actor: 'Saoirse Ronan', image: 'https://ntvb.tmsimg.com/assets/assets/491010_v9_bc.jpg')
actor82 = Actor.create!(actor: 'Emma Watson', image: 'https://m.media-amazon.com/images/M/MV5BMTQ3ODE2NTMxMV5BMl5BanBnXkFtZTgwOTIzOTQzMjE@._V1_.jpg')

#timothee king
actor83 = Actor.create!(actor: 'Robert Pattinson', image: 'https://ntvb.tmsimg.com/assets/assets/487714_v9_bc.jpg')
actor84 = Actor.create!(actor: 'Lily-Rose Depp', image: 'https://images.hellomagazine.com/horizon/square/6df8994fc3ee-lily-rose-depp.jpg')

#anne devil wears prada
actor85 = Actor.create!(actor: 'Meryl Streep', image: 'https://m.media-amazon.com/images/M/MV5BMTU4Mjk5MDExOF5BMl5BanBnXkFtZTcwOTU1MTMyMw@@._V1_FMjpg_UX1000_.jpg')
actor86 = Actor.create!(actor: 'Emily Blunt', image: 'https://cdn.britannica.com/16/189516-050-E05AC3FA/Emily-Blunt-2013.jpg')

#anne oceans
actor87 = Actor.create!(actor: 'Sarah Paulson', image: 'https://imaging.broadway.com/images/square-11/w800/125555-9.jpg')

#anne hustle
actor88 = Actor.create!(actor: 'Rebel Wilson', image: 'https://flxt.tmsimg.com/assets/594058_v9_bd.jpg')
actor89 = Actor.create!(actor: 'Alex Sharp', image: 'https://www.themoviedb.org/t/p/w500/hsbwCL4YzVnbmgFYvGRc9V30gSM.jpg')

#anne alice in wonderland
actor90 = Actor.create!(actor: 'Johnny Depp', image: 'https://m.media-amazon.com/images/M/MV5BOTBhMTI1NDQtYmU4Mi00MjYyLTk5MjEtZjllMDkxOWY3ZGRhXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg')
actor91 = Actor.create!(actor: 'Mia Wasikowska', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/MJK_08786_Mia_Wasikowska_%28Damsel%2C_Berlinale_2018%29_%28cropped%29.jpg')

#anne les
actor92 = Actor.create!(actor: 'Hugh Jackman', image: 'https://m.media-amazon.com/images/M/MV5BNDExMzIzNjk3Nl5BMl5BanBnXkFtZTcwOTE4NDU5OA@@._V1_.jpg')
actor93 = Actor.create!(actor: 'Amanda Seyfried', image: 'https://flxt.tmsimg.com/assets/302157_v9_bb.jpg')

#anne get smart
actor94 = Actor.create!(actor: 'Dwayne Johnson', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg/640px-Dwayne_Johnson_2014_%28cropped%29.jpg')

#matt ghosts
actor95 = Actor.create!(actor: 'Jennifer Garner', image: 'https://flxt.tmsimg.com/assets/69774_v9_bb.jpg')
actor96 = Actor.create!(actor: 'Emma Stone', image: 'https://media1.popsugar-assets.com/files/thumbor/lcn_wDi1eGsJ5E-sOnR4cfZdKJw/0x68:2312x2380/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/03/03/018/n/1922398/03ad07805e5ee78bbd70d3.36131857_/i/Emma-Stone.jpg')

#matt beach bum
actor97 = Actor.create!(actor: 'Isla Fisher', image: 'https://m.media-amazon.com/images/M/MV5BODY3MDQ4MTQ4Nl5BMl5BanBnXkFtZTgwNDU2NzU1MDE@._V1_FMjpg_UX1000_.jpg')

#matt lose a guy
actor98 = Actor.create!(actor: 'Kate Hudson', image: 'https://media1.popsugar-assets.com/files/thumbor/zEv-RaGWyrcSkIZtOXL7GAPjTao=/0x0:3150x3868/3150x3868/filters:format_auto():quality(85):extract_cover()/2023/07/20/692/n/1922398/9ff0bb2664b95484efe9d1.20512174_.jpg')
actor99 = Actor.create!(actor: 'Kathryn Hahn', image: 'https://deadline.com/wp-content/uploads/2016/09/rexfeatures_5899238af.jpg')

#matt gentlemen
actor100 = Actor.create!(actor: 'Colin Farrell', image: 'https://api.time.com/wp-content/uploads/2015/08/colin-ferrell.jpg')

#jennifer red
actor101 = Actor.create!(actor: 'Jennifer Lawrence', image: 'https://www.the-sun.com/wp-content/uploads/sites/6/2023/09/9949f785-0d21-4346-96d9-f0772b24c9fa.jpg')
actor102 = Actor.create!(actor: 'Joel Edgerton', image: 'https://i.guim.co.uk/img/media/f0f8f87bb373fb713f43c32d23e36b901d110ec3/0_0_5184_3110/master/5184.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=0624b2a1fea7b5f78fb241eed4ac2fb6')
actor103 = Actor.create!(actor: 'Matthias Schoenaerts', image: 'https://m.media-amazon.com/images/M/MV5BMjMyNTQ0MDgwOF5BMl5BanBnXkFtZTcwOTUxNzA3OA@@._V1_FMjpg_UX1000_.jpg')

#jennifer passengers
actor104 = Actor.create!(actor: 'Chris Pratt', image: 'https://mario.wiki.gallery/images/9/9b/Chris_Pratt.jpg')
actor105 = Actor.create!(actor: 'Michael Sheen', image: 'https://flxt.tmsimg.com/assets/153339_v9_bc.jpg')

#jennifer silver
actor106 = Actor.create!(actor: 'Bradley Cooper', image: 'https://hips.hearstapps.com/hmg-prod/images/bradley-cooper-gettyimages-1131909134.jpg')
actor107 = Actor.create!(actor: 'Robert De Niro', image: 'https://cdn.britannica.com/00/213300-050-ADF31CD9/American-actor-Robert-De-Niro-2019.jpg')

#jennifer mother
actor108 = Actor.create!(actor: 'Javier Bardem', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Premios_Goya_2018_-_Javier_Bardem_%28cropped%29.jpg/800px-Premios_Goya_2018_-_Javier_Bardem_%28cropped%29.jpg')
actor109 = Actor.create!(actor: 'Michelle Pfeiffer', image: 'https://flxt.tmsimg.com/assets/1341_v9_bc.jpg')



puts 'Seeding Connections...💦'
Connection.create!(movie_id: movie1.id, actor_id: actor1.id)
Connection.create!(movie_id: movie1.id, actor_id: actor2.id)
Connection.create!(movie_id: movie1.id, actor_id: actor3.id)

Connection.create!(movie_id: movie2.id, actor_id: actor1.id)
Connection.create!(movie_id: movie2.id, actor_id: actor4.id)
Connection.create!(movie_id: movie2.id, actor_id: actor5.id)

Connection.create!(movie_id: movie3.id, actor_id: actor1.id)
Connection.create!(movie_id: movie3.id, actor_id: actor6.id)
Connection.create!(movie_id: movie3.id, actor_id: actor7.id)

Connection.create!(movie_id: movie4.id, actor_id: actor1.id)
Connection.create!(movie_id: movie4.id, actor_id: actor8.id)
Connection.create!(movie_id: movie4.id, actor_id: actor9.id)

Connection.create!(movie_id: movie5.id, actor_id: actor1.id)
Connection.create!(movie_id: movie5.id, actor_id: actor5.id)
Connection.create!(movie_id: movie5.id, actor_id: actor10.id)

Connection.create!(movie_id: movie6.id, actor_id: actor1.id)
Connection.create!(movie_id: movie6.id, actor_id: actor11.id)
Connection.create!(movie_id: movie6.id, actor_id: actor12.id)

Connection.create!(movie_id: movie7.id, actor_id: actor13.id)
Connection.create!(movie_id: movie7.id, actor_id: actor14.id)
Connection.create!(movie_id: movie7.id, actor_id: actor15.id)

Connection.create!(movie_id: movie8.id, actor_id: actor13.id)
Connection.create!(movie_id: movie8.id, actor_id: actor16.id)
Connection.create!(movie_id: movie8.id, actor_id: actor17.id)

Connection.create!(movie_id: movie9.id, actor_id: actor13.id)
Connection.create!(movie_id: movie9.id, actor_id: actor18.id)
Connection.create!(movie_id: movie9.id, actor_id: actor19.id)

Connection.create!(movie_id: movie10.id, actor_id: actor13.id)
Connection.create!(movie_id: movie10.id, actor_id: actor20.id)
Connection.create!(movie_id: movie10.id, actor_id: actor21.id)

Connection.create!(movie_id: movie11.id, actor_id: actor13.id)
Connection.create!(movie_id: movie11.id, actor_id: actor22.id)
Connection.create!(movie_id: movie11.id, actor_id: actor23.id)

Connection.create!(movie_id: movie12.id, actor_id: actor13.id)
Connection.create!(movie_id: movie12.id, actor_id: actor10.id)
Connection.create!(movie_id: movie12.id, actor_id: actor24.id)

Connection.create!(movie_id: movie13.id, actor_id: actor24.id)
Connection.create!(movie_id: movie13.id, actor_id: actor25.id)
Connection.create!(movie_id: movie13.id, actor_id: actor26.id)

Connection.create!(movie_id: movie14.id, actor_id: actor24.id)
Connection.create!(movie_id: movie14.id, actor_id: actor27.id)
Connection.create!(movie_id: movie14.id, actor_id: actor28.id)

Connection.create!(movie_id: movie15.id, actor_id: actor24.id)
Connection.create!(movie_id: movie15.id, actor_id: actor29.id)
Connection.create!(movie_id: movie15.id, actor_id: actor30.id)

Connection.create!(movie_id: movie16.id, actor_id: actor24.id)
Connection.create!(movie_id: movie16.id, actor_id: actor31.id)
Connection.create!(movie_id: movie16.id, actor_id: actor32.id)

Connection.create!(movie_id: movie17.id, actor_id: actor24.id)
Connection.create!(movie_id: movie17.id, actor_id: actor33.id)
Connection.create!(movie_id: movie17.id, actor_id: actor34.id)

Connection.create!(movie_id: movie18.id, actor_id: actor24.id)
Connection.create!(movie_id: movie18.id, actor_id: actor35.id)
Connection.create!(movie_id: movie18.id, actor_id: actor36.id)

Connection.create!(movie_id: movie19.id, actor_id: actor37.id)
Connection.create!(movie_id: movie19.id, actor_id: actor38.id)
Connection.create!(movie_id: movie19.id, actor_id: actor39.id)

Connection.create!(movie_id: movie20.id, actor_id: actor37.id)
Connection.create!(movie_id: movie20.id, actor_id: actor40.id)
Connection.create!(movie_id: movie20.id, actor_id: actor41.id)

Connection.create!(movie_id: movie21.id, actor_id: actor37.id)
Connection.create!(movie_id: movie21.id, actor_id: actor42.id)
Connection.create!(movie_id: movie21.id, actor_id: actor43.id)

Connection.create!(movie_id: movie22.id, actor_id: actor37.id)
Connection.create!(movie_id: movie22.id, actor_id: actor44.id)
Connection.create!(movie_id: movie22.id, actor_id: actor45.id)

Connection.create!(movie_id: movie23.id, actor_id: actor37.id)
Connection.create!(movie_id: movie23.id, actor_id: actor46.id)
Connection.create!(movie_id: movie23.id, actor_id: actor47.id)

Connection.create!(movie_id: movie24.id, actor_id: actor37.id)
Connection.create!(movie_id: movie24.id, actor_id: actor48.id)
Connection.create!(movie_id: movie24.id, actor_id: actor49.id)

Connection.create!(movie_id: movie25.id, actor_id: actor50.id)
Connection.create!(movie_id: movie25.id, actor_id: actor51.id)
Connection.create!(movie_id: movie25.id, actor_id: actor52.id)

Connection.create!(movie_id: movie26.id, actor_id: actor50.id)
Connection.create!(movie_id: movie26.id, actor_id: actor53.id)
Connection.create!(movie_id: movie26.id, actor_id: actor54.id)

Connection.create!(movie_id: movie27.id, actor_id: actor50.id)
Connection.create!(movie_id: movie27.id, actor_id: actor55.id)
Connection.create!(movie_id: movie27.id, actor_id: actor56.id)

Connection.create!(movie_id: movie28.id, actor_id: actor50.id)
Connection.create!(movie_id: movie28.id, actor_id: actor57.id)
Connection.create!(movie_id: movie28.id, actor_id: actor58.id)

Connection.create!(movie_id: movie29.id, actor_id: actor50.id)
Connection.create!(movie_id: movie29.id, actor_id: actor22.id)
Connection.create!(movie_id: movie29.id, actor_id: actor59.id)

Connection.create!(movie_id: movie30.id, actor_id: actor50.id)
Connection.create!(movie_id: movie30.id, actor_id: actor24.id)
Connection.create!(movie_id: movie30.id, actor_id: actor60.id)

Connection.create!(movie_id: movie31.id, actor_id: actor61.id)
Connection.create!(movie_id: movie31.id, actor_id: actor62.id)
Connection.create!(movie_id: movie31.id, actor_id: actor20.id)

Connection.create!(movie_id: movie32.id, actor_id: actor61.id)
Connection.create!(movie_id: movie32.id, actor_id: actor63.id)
Connection.create!(movie_id: movie32.id, actor_id: actor64.id)

Connection.create!(movie_id: movie33.id, actor_id: actor61.id)
Connection.create!(movie_id: movie33.id, actor_id: actor65.id)
Connection.create!(movie_id: movie33.id, actor_id: actor66.id)

Connection.create!(movie_id: movie34.id, actor_id: actor61.id)
Connection.create!(movie_id: movie34.id, actor_id: actor67.id)
Connection.create!(movie_id: movie34.id, actor_id: actor68.id)

Connection.create!(movie_id: movie35.id, actor_id: actor61.id)
Connection.create!(movie_id: movie35.id, actor_id: actor69.id)
Connection.create!(movie_id: movie35.id, actor_id: actor70.id)

Connection.create!(movie_id: movie36.id, actor_id: actor61.id)
Connection.create!(movie_id: movie36.id, actor_id: actor71.id)
Connection.create!(movie_id: movie36.id, actor_id: actor72.id)

Connection.create!(movie_id: movie37.id, actor_id: actor73.id)
Connection.create!(movie_id: movie37.id, actor_id: actor74.id)
Connection.create!(movie_id: movie37.id, actor_id: actor75.id)

Connection.create!(movie_id: movie38.id, actor_id: actor73.id)
Connection.create!(movie_id: movie38.id, actor_id: actor76.id)
Connection.create!(movie_id: movie38.id, actor_id: actor77.id)

Connection.create!(movie_id: movie39.id, actor_id: actor73.id)
Connection.create!(movie_id: movie39.id, actor_id: actor39.id)
Connection.create!(movie_id: movie39.id, actor_id: actor78.id)

Connection.create!(movie_id: movie40.id, actor_id: actor73.id)
Connection.create!(movie_id: movie40.id, actor_id: actor79.id)
Connection.create!(movie_id: movie40.id, actor_id: actor80.id)

Connection.create!(movie_id: movie41.id, actor_id: actor73.id)
Connection.create!(movie_id: movie41.id, actor_id: actor81.id)
Connection.create!(movie_id: movie41.id, actor_id: actor82.id)

Connection.create!(movie_id: movie42.id, actor_id: actor73.id)
Connection.create!(movie_id: movie42.id, actor_id: actor83.id)
Connection.create!(movie_id: movie42.id, actor_id: actor84.id)

Connection.create!(movie_id: movie43.id, actor_id: actor27.id)
Connection.create!(movie_id: movie43.id, actor_id: actor85.id)
Connection.create!(movie_id: movie43.id, actor_id: actor86.id)

Connection.create!(movie_id: movie44.id, actor_id: actor27.id)
Connection.create!(movie_id: movie44.id, actor_id: actor40.id)
Connection.create!(movie_id: movie44.id, actor_id: actor87.id)

Connection.create!(movie_id: movie45.id, actor_id: actor27.id)
Connection.create!(movie_id: movie45.id, actor_id: actor88.id)
Connection.create!(movie_id: movie45.id, actor_id: actor89.id)

Connection.create!(movie_id: movie46.id, actor_id: actor27.id)
Connection.create!(movie_id: movie46.id, actor_id: actor90.id)
Connection.create!(movie_id: movie46.id, actor_id: actor91.id)

Connection.create!(movie_id: movie47.id, actor_id: actor27.id)
Connection.create!(movie_id: movie47.id, actor_id: actor92.id)
Connection.create!(movie_id: movie47.id, actor_id: actor93.id)

Connection.create!(movie_id: movie48.id, actor_id: actor27.id)
Connection.create!(movie_id: movie48.id, actor_id: actor39.id)
Connection.create!(movie_id: movie48.id, actor_id: actor94.id)

Connection.create!(movie_id: movie49.id, actor_id: actor45.id)
Connection.create!(movie_id: movie49.id, actor_id: actor95.id)
Connection.create!(movie_id: movie49.id, actor_id: actor96.id)

Connection.create!(movie_id: movie50.id, actor_id: actor45.id)
Connection.create!(movie_id: movie50.id, actor_id: actor44.id)
Connection.create!(movie_id: movie50.id, actor_id: actor97.id)

Connection.create!(movie_id: movie51.id, actor_id: actor45.id)
Connection.create!(movie_id: movie51.id, actor_id: actor3.id)
Connection.create!(movie_id: movie51.id, actor_id: actor95.id)

Connection.create!(movie_id: movie52.id, actor_id: actor45.id)
Connection.create!(movie_id: movie52.id, actor_id: actor4.id)
Connection.create!(movie_id: movie52.id, actor_id: actor5.id)


Connection.create!(movie_id: movie53.id, actor_id: actor45.id)
Connection.create!(movie_id: movie53.id, actor_id: actor98.id)
Connection.create!(movie_id: movie53.id, actor_id: actor99.id)

Connection.create!(movie_id: movie54.id, actor_id: actor45.id)
Connection.create!(movie_id: movie54.id, actor_id: actor79.id)
Connection.create!(movie_id: movie54.id, actor_id: actor100.id)

Connection.create!(movie_id: movie55.id, actor_id: actor101.id)
Connection.create!(movie_id: movie55.id, actor_id: actor102.id)
Connection.create!(movie_id: movie55.id, actor_id: actor103.id)

Connection.create!(movie_id: movie56.id, actor_id: actor101.id)
Connection.create!(movie_id: movie56.id, actor_id: actor104.id)
Connection.create!(movie_id: movie56.id, actor_id: actor105.id)

Connection.create!(movie_id: movie57.id, actor_id: actor101.id)
Connection.create!(movie_id: movie57.id, actor_id: actor106.id)
Connection.create!(movie_id: movie57.id, actor_id: actor107.id)

Connection.create!(movie_id: movie58.id, actor_id: actor101.id)
Connection.create!(movie_id: movie58.id, actor_id: actor108.id)
Connection.create!(movie_id: movie58.id, actor_id: actor109.id)

Connection.create!(movie_id: movie59.id, actor_id: actor101.id)
Connection.create!(movie_id: movie59.id, actor_id: actor106.id)
Connection.create!(movie_id: movie59.id, actor_id: actor21.id)

Connection.create!(movie_id: movie60.id, actor_id: actor101.id)
Connection.create!(movie_id: movie60.id, actor_id: actor106.id)
Connection.create!(movie_id: movie60.id, actor_id: actor107.id)


review1 = Review.create!(review: 'I can watch this movie over and over again! It\'s a ten out of ten!', user_id: user1.id, movie_id: movie1.id )
review2 = Review.create!(review: 'I can watch this movie over and over again! It\'s a ten out of ten!', user_id: user2.id, movie_id: movie2.id )
review3 = Review.create!(review: 'I can watch this movie over and over again! It\'s a ten out of ten!', user_id: user3.id, movie_id: movie3.id )
review4 = Review.create!(review: 'I can watch this movie over and over again! It\'s a ten out of ten!', user_id: user4.id, movie_id: movie4.id )



# puts 'Done Seeding...🌷'