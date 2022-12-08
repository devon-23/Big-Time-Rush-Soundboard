const sounds = ['alarm_bells', 'blink', 'boing', 'boink', 'boink2', 'uh oh', 'bullwhip', 'dash', 'double_swoosh',
'fiddle', 'head_bonk', 'headshake', 'hit', 'idea', 'magic_bell', 'magic_burst', 
                'pie', 'pipe', 'pop', 'rooster', 'shot', 'slow-mo', 'teeth_chatter', 'whistle_take', 'zing_in', 'zing_out', 'zip_by']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        //this.stopSongs()
        //document.getElementById(sound).pause()
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound2 => {
        //const song = document.getElementById(sound)
        //console.log('test123')
        this.document.getElementById(sound2).pause();
        this.document.getElementById(sound2).currentTime = 0;
        //song.play()
    })
}