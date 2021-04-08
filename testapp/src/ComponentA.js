import React from 'react'

function ComponentA ({property}) {
     
    return(
    <div>
        <ol>
        {property.map((x) => 
            <li>{x.room_type}, {x.vacant_rooms}, ${x.price}</li>
        )}
        </ol>
    </div>
    )
}

export default ComponentA;
