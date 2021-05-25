case 'stickcircle':
					if (isQuotedImage) {
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
										ran = getRandom('.png')
					owgi = await benny.downloadAndSaveMediaMessage(ger)
            var imgbb = require('imgbb-uploader')
					anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
            buffer = await getBuffer(`https://pecundang.herokuapp.com/api/imagecircle?url=${anu.display_url}`)
            benny.sendMessage(from, buffer, sticker, {quoted: ben})
					} else if (isQuotedSticker) {
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
										ran = getRandom('.png')
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 var imgbb = require('imgbb-uploader')
					anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
            buffer = await getBuffer(`https://pecundang.herokuapp.com/api/imagecircle?url=${anu.display_url}`)
            benny.sendMessage(from, buffer, sticker, {quoted: ben})
					} else {
            reply('Reply media!')
          }
					break
