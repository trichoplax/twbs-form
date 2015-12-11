$(function() {
    $('form').submit(function() {
        var submit = true
        $('.error').remove()

        $('input').each(function() {
            var $this = $(this)
            var elClass = $this.attr('class')
            var message = ''

            if (!elClass) {
                return
            }

            if ($this.hasClass('required') && $this.val().length < 1) {
                message += 'Required Field<br>'
            }

            if (elClass.indexOf('min-') !== -1) {
                var min = elClass.match(/min-(\d+)/)[1]
                if (
                    ($this.val().length < min && $this.hasClass('required'))
                    ||
                    ($this.val().length < min && $this.val().length > 0 && !$this.hasClass('required'))
                ) {
                    message += min + ' character minimum<br>'
                }
            }

            if (elClass.indexOf('max-') !== -1) {
                var max = elClass.match(/max-(\d+)/)[1]
                if ($this.val().length > max) {
                    message += max + ' characters maximum<br>'
                }
            }

            if (elClass.indexOf('alpha') !== -1) {
                var regex = /^[A-z\s]+$/
                if (!regex.test($this.val()) && $this.val().length > 0) {
                    message += 'Letters only<br>'
                }
            }

            if (elClass.indexOf('conditional') !== -1) {
                var targetId = elClass.match(/conditional-([A-z]+)/)[1]
                var $target = $('#' + targetId)
                var value = elClass.match(/conditional-[A-z]+-(.+)\s/)[1]
                if ($target.is(':checked') && $this.val().length < 1) {
                    message +=  'Required field while ' + targetId + ' is ' + value + '<br>'
                }
            }

            if (message.length > 0) {
                submit = false
                showMessage($this, message)
            }


        })

        return submit
    })
})

var showMessage = function($el, message) {
    var alert = "<div class='error'>" + message + "</div>"
    $el.after(alert);
}