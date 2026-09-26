import React from 'react'

const KartLeft = () => {
  return (
  <>
    <div className='form'>
        <h4>
            الكوبون
        </h4>
        <p>
            ادخل رمز الكوبون الخاص بك اذا كان لديك واحد 
        </p>

        <div className='coponn d-flex gap-5'>
            <input type="text" placeholder='رمز الكوبون' />

            <button className='putTotal'>
                تاكيد العنوان 
            </button>


        </div>
        <h4>
            ملحوظه
        </h4>
        <p>
            اضافه ملحوضه للتاجر
        </p>

        <textarea name="" id="" rows={8}></textarea>
        <div className='total d-flex'>
            <p>المجموع الفرعي </p>
            <p>6000ج.م</p>
        </div>
        <div className='total d-flex'>
            <p>المجموع الاجمالي  </p>
            <p>6000ج.م</p>
        </div>
        
        <div className='total  d-flex mb-5'>
            <button className='putTotal'>
                تحديث السلة
            </button>
            <button className='putTotal'>
                الدفع
            </button>

        </div>

    </div>


  </>
  )
}

export default KartLeft