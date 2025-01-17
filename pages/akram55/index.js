const Admin = () => {
  return (
    <>
      <section className="rules bg-background-500 h-screen">
        <div className="banner flex flex-col justify-center items-center bg-akram55 w-full h-[25rem] bg-cover bg-center opacity-70">
          <h2 className="text-[40.0pt]">𝖨𝖱𝖠𝖰 𝖫𝖤𝖦𝖤𝖭𝖣𝖲 𝖱𝖯</h2>
          <h2 className="text-[40.0pt]"> الحزم</h2>
        </div>
        <div className="flex flex-col gap-4 m-5">
          <div tabIndex={0} className="collapse collapse-arrow bg-[#141415]">
            <div className="collapse-title text-[24.0pt] text-white font-black flex items-center justify-center">
              قوانين العامه للحزم 🦸‍♂️
            </div>
            <div className="collapse-content">
              <ol className="p-8">
                <li className="mb-4 text-[13.999999999999998pt]">
                  يمنع طلب استرداد الاموال بعد شرائك الحزمة ويجب أن تكون متأكدا
                  قبل شرائك{" "}
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  يمنع اعطاء او اهداء حزمتك , وهي صالحة فقط للمشتري{" "}
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  لا يحق للعميل طلب تخفيض سعر او شيء مجاني من المتجر{" "}
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  في حال تكرار مخالفاتك واستخدامك الخاطئ لصلاحيات الحزمة , سيتم
                  سحب الباقة منك{" "}
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  يمنع طلب تبديل باقة او ايدي او اعطائه لأحد ثاني منعا باتا بعد
                  شرائك{" "}
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  في حال تركك للسيرفر لمدة شهرين كاملين من غير تقديم عذر لمسؤول
                  المتجر , سيتم سحب منك الايدي والحزمة وفي حال كان الايدي ثنائي
                  او احادي المدة تكون شهر{" "}
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  يمكنك شراء ايدي من دون حزمة ويتم التواصل مع مسؤول المتجر{" "}
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  في حال شرائك لأي منتج فهذا لا يعني انك غير معرض للباند{" "}
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  عند شرائك لايدي جديد وتغيره بعد فتره بشراء ايدي جديد يحق
                  للادارة سحب الايدي الاول{" "}
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  ممنوع التجارة في المنتجات بمعنى شراء المنتج من المتجر واعادة
                  بيعها على شخص أخر{" "}
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  في حال خروجك من ديسكورد السيرفر يتم سحب منك الحزم و الايدي{" "}
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  يمنع طلب استرداد الاموال بعد الشراء ويجب أن تكون متأكد قبل
                  الشراء وفي حال تكرار مخالفاتك واستخدامك الخاطئ لصلاحيات المنتج
                  سيتم سحب المنتج نهائي{" "}
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  ممنوع نقل الحزمة من حساب الي حساب اخر{" "}
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  يجب حفظ جميع فواتير الشراء لضمان حقك و عدم سحب اغراضك{" "}
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  يتم تسليمك المنتج المطلوب بعد الدفع استلام فوري او الى 12 ساعة
                  احد اقصى{" "}
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  القوانين العامة للرولات + الرومات الخاصة - يمنع اعطاء الرتبة
                  الخاصة في السيرفر الا لصاحبها فقط・ يمنع مخالفة قوانين
                  الدسكورد او السب داخل الرومات الخاصة وينطبق عليها ماينطبق على
                  الرومات العامة・ في حال عدم التفاعل في الروم الخاص او التلفيت
                  من الدسكورد سوف يتم حذف الروم نهائيا・ `{" "}
                </li>
                <li className="mb-4 text-[13.999999999999998pt]">
                  في حال نزل عليك ثلاث تحذيرات سيتم سحب الباقه اول مره لمده 7
                  ايام ثاني مره لمده 14 يوم المره الثالثة بتنسحب منك نهائي{" "}
                </li>
              </ol>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow bg-[#141415]"
          ></div>
        </div>
      </section>
    </>
  );
};

export default Admin;
