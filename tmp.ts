// let observer = null

  // useEffect(() => {
  //   const fun = () => {
  //     try{
  //     observer = new MutationObserver((_m, me) => {
  //       try {
  //         const but = document?.getElementsByClassName('sc-btn-ec',)
          
  //         if(but.length > 0) {
  //           for(const b of but) {
  //             console.info(b)
  //             // b.textContent = 'buy b'
  //             // b.innerHTML = 'buy bundle'
  //             // if(b?.parentElement?.classList?.contains('bundle-button')) {
  //             //   b.textContent = 'buy bundle'
  //             b?.classList?.add('bundle-button-sc-sample')
  //             // } else { b.textContent = 'add bundle'}
  //           }
  //           observer.disconnect()
  //         }
  //       } catch(e) {console.info(e)}
  //     })
  //   }
  //   catch(e) {
  //     console.info(e)
  //   }
  //     observer.observe(document, {
  //       childList: true,
  //       subtree: true,
  //     })
  //   }
  //   setTimeout(() => {
  //     fun()
  //   }, 500)
  // }, [])