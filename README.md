# todoListAPI

## Schema
### 데이터 불러오기 
- url: localhost:3000/todos
- method : GET
- status : 200
- Schema : 
<pre>
   <code>
   {
      result: Boolean
      data: Array,
   }
   </code>
</pre>
<pre>
   <code>
   {
      result: true,
      data: [
         {
            id: Number,
            text: String,
            edit: Boolean,
            done: Boolean,
         }
      ]
   }
   </code>
</pre>
- status : 500
<pre>
   <code>
   {
      result: false,
      message: 에러메시지
   }
   </code>
</pre>
