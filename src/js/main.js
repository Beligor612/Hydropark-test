$(function () {
    const animationIn = 'animate__fadeIn'
    const animationOut = 'animate__fadeOut'
    function success(){
        $('#form').addClass('animate__fadeOut')
        setTimeout(()=>{
            $('#form').hide()
            clearForm()
            $('.success').show()
        },500)
        setTimeout(()=>{
            $('#form').removeClass('animate__fadeOut')
            $('.success').hide()
            $('#form').show()
        },3000)
    }
    function hidePopup(){
        $('#popup-wrap').addClass('animate__fadeOut');
            $('#popup-form').addClass(animationOut)
            setTimeout(()=>{
                $('#popup-wrap').removeClass('animate__fadeOut');
                $('#popup-form').removeClass(animationOut)
                $('#popup-wrap').hide()
            }, 1000)
            setTimeout(()=>{
                $('#popup-wrap').addClass('animate__fadeIn');
                $('#popup-form').addClass(animationIn)
            },1100)
        }
    function validateForm(name, phone){
        if(!name || !phone){
            return false
        }
        else{
            return true
        }
    }
    function clearForm(){
        $('#tel').removeClass('error')
        $('#name').removeClass('error')
        $('#form')[0].reset()
    }
    setTimeout(()=>{
        $('#chess_active_btn').hide()
    },300)
    $('#plans').on('click', function(e){
        e.preventDefault()
        $('#chess_active_btn')[0].click()
    })
    $("#tel").mask("+380(99) 999 99 99");
    $('#present').click(function(){
        $('#popup-wrap').show()
        setTimeout(()=>{
            $('#popup-wrap').removeClass('animate__fadeIn');
            $('#popup-form').removeClass(animationIn)
        }, 1000)
    })
    $('#popup-wrap').click(function(e){
        if(e.target === $('#popup-wrap')[0]){
            hidePopup()
        }
    })
    $('#popup__close_icon').click(function(){
        $('#popup-wrap').addClass('animate__fadeOut');
            hidePopup()
    })
    $('#form').submit(function(e){
        e.preventDefault()
        // const nameValue = $('#name').val()
        // const phoneValue = $('#tel').val()
        // const isValid = validateForm(nameValue, phoneValue)
        const Valdata = `action=post_wpcf7&client-name=${$('#name').val()}&client-tel=${$('#tel').val()}&client-email=${' '}&client-quest=${' '}`
        console.log(Valdata)
        $.ajax({
            url: 'http://hydropark/wp-admin/admin-ajax.php',
            type: 'POST',
            data: Valdata,
            beforeSend: function( xhr ) {
                // $('#submit').text('Загрузка, 5 сек...');	
            },
            success: function( data ) {
                success()
                setTimeout(()=>{
                    hidePopup()
                }, 2000)
                console.log( 'SUCCESS' );
            }
        })
        if(!isValid){
            $('#tel').addClass('error')
            $('#name').addClass('error')
            $('#tel').after('<span class="animate_animated animate__fadeIn mikro">*Проверьте поля ввода</span>')
        } else{
            success()
            setTimeout(()=>{
                hidePopup()
            }, 2000)
            
        }
    })
    $('#nav_list').on('click', function(e){
        const listForAbout = [
            '6 будинків з тематичними зонами активностей та відпочинку', 
            '3639 м2 комфортного двору, побудованого за законами краси і функціональності',
            'Закрита територія в 0.0 Га ',
            '513 паркомісць']
        const listForBenefits = [
            'Зелені зони  для відпочинку та спілкування', 
            '1,5 км прогулянкового маршруту',
            'Дитячі та спортивні майданчики    ',
            'Зони для вигулу домашніх улюбленців ',
            'Власні фруктові сади та теплиці.']
        const listForPlace = [
            'Комплекс розташувався посеред Гідропарку, вдалині від гомону автівок та скупчення людей', 
            '7 хвилин до ст.м. Академіка Павлова',
            'Коворкінг в радіусі 2 км від комплексу']
        const about = $('#about')[0]
        const benefits = $('#benefits')[0]
        const place = $('#place')[0]
        const element = e.target.parentElement
        if(element === about){
            $('.active').removeClass('active')
            about.classList.add('active')
            $('.navigation_list__info').empty()
            listForAbout.forEach((element, index)=>{
                setTimeout(()=>{
                    $('.navigation_list__info').append(`<li class="info__item animate__animated animate__fadeIn">${element}</li>`)
                },20 * ++index)
            })
        }
        else if(element === benefits){
            $('.active').removeClass('active')
            benefits.classList.add('active')
            $('.navigation_list__info').empty()
            listForBenefits.forEach((element, index)=>{
                setTimeout(()=>{
                    $('.navigation_list__info').append(`<li class="info__item animate__animated animate__fadeIn">${element}</li>`)
                },20 * ++index)
            })
        }
        else if(element === place){
            $('.active').removeClass('active')
            place.classList.add('active')
            $('.navigation_list__info').empty()
            listForPlace.forEach((element, index)=>{
                setTimeout(()=>{
                    $('.navigation_list__info').append(`<li class="info__item animate__animated animate__fadeIn">${element}</li>`)
                },20 * ++index)
            })
        }
    })
    // $('#submit').click(function(event){
        // event.preventDefault()
        // const Valdata = `action=post_wpcf7&client-name=${$('#name').val()}&client-tel=${$('#tel').val()}&client-email=${' '}&client-quest=${' '}`
        // console.log(Valdata)
        // $.ajax({
        //     url: 'http://hydropark/wp-admin/admin-ajax.php',
        //     type: 'POST',
        //     data: Valdata,
        //     beforeSend: function( xhr ) {
        //         // $('#submit').text('Загрузка, 5 сек...');	
        //     },
        //     success: function( data ) {
        //         success()
        //         setTimeout(()=>{
        //             hidePopup()
        //         }, 2000)	
        //         console.log( 'SUCCESS' );
        //     }
        // })
    // })
    const clientHeight = $(document)[0].documentElement.clientHeight;
    const clientWidth = $(document)[0].documentElement.clientWidth;
    // console.log(clientHeight, clientWidth)
    // $('#popup-form').width(`${(clientWidth/2.7)}`)





    // $('.button').click(function(){
    //     console.log('click')
    //     $.ajax({
    //         url: 'http://hydropark/wp-admin/admin-ajax.php',
    //         type: 'POST',
    //         data: 'action=misha&param1=2&param2=3',
    //         beforeSend: function( xhr ) {
	// 			$('.button').text('Загрузка, 5 сек...');	
	// 		},
	// 		success: function( data ) {
	// 			$('.button').text('Отправить');	
	// 			alert( data );
	// 		}
    //     })
    // })
});