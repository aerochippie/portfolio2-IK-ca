const blobbing = KUTE.fromTo(
    '#blob1',
    {
        path: '#blob1'
    },
    {
        path: '#blob2'
    },
    {
        repeat:999, duration:4000, yoyo:true
    }
)


blobbing.start()