//useCallback : 함수를 재화용하기 위한 훅(hook)
import React, {useState, useCallback } from 'react';
import Light from './Light';
const Test8 = () =>{
   const [masterOn, setMasterOn] = useState(false);
   const [openRoomOn, setOpenRoomOn] = useState(false);
   const [kitchenOn, setKitchenOn] = useState(false);
   const [bathOn, setBathOn] = useState(false);
   const toggleMaster = useCallback(() => setMasterOn(!masterOn),[masterOn]);
   const toggleOpenroom = useCallback(() => setOpenRoomOn(!openRoomOn),[openRoomOn]);
   const toggleKitchen = useCallback(()=>setKitchenOn(!kitchenOn),[kitchenOn]);
   const toggleBath = useCallback(() => setBathOn(!bathOn), [bathOn]);
   
   return(
      <div>
         <Light room ="침실" on={masterOn} toggle={toggleMaster} />
         <Light room ="거실" on={openRoomOn} toggle={toggleOpenroom} />
         <Light room ="주방" on={kitchenOn} toggle={toggleKitchen} />
         <Light room ="욕실" on={bathOn} toggle={toggleBath} />
      </div>
   )

}

export default Test8