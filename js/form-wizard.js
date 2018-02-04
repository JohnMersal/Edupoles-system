$(function () {
    /*************************************************/
    /************ #rootwizard-custom-circle ***********/
    $('#rootwizard-custom-circle').bootstrapWizard({
        onTabShow: function(tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index+1;
            var $percent = ($current/$total) * 100;
            $('#rootwizard-custom-circle').find('.bar').css({width:$percent+'%'});
        },
        'onNext': function(tab, navigation, index) {

            // select id of current tab content
            var $id = tab.find("a").attr("href");
            var $approved = 1;
            // Check all input validation
            $($id + " input").each(function(){
                if (!$(this).val()) {
                    $(this).css('border-color', 'red');
                    $(this).parent().parent().find("i.alert").removeClass("alert-hide");
                    $approved = 0;
                } else {
                    $(this).parent().parent().find("i.alert").addClass("alert-hide");
                }
            });
            if ($approved !== 1) return false;
        },
        'onTabClick': function(tab, navigation, index) {
            // select id of current tab content
            var $id = tab.find("a").attr("href");
            var $approved = 1;
            // Check all input validation
            $($id + " input").each(function(){
                if (!$(this).val()) {
                    $(this).css('border-color', 'red');
                    $(this).parent().parent().find("i.alert").removeClass("alert-hide");
                    $approved = 0;
                } else {
                    $(this).parent().parent().find("i.alert").addClass("alert-hide");
                }
            });
            if ($approved !== 1) return false;
            // Add class visited to style css
            if (tab.attr("class")=="visited"){
                tab.removeClass("visited");
            } else {
                tab.addClass("visited");
            }
        },
        'tabClass': 'bwizard-steps-o','nextSelector': '.button-next', 'previousSelector': '.button-previous'
    });

});