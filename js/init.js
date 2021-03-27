$(document).ready(function() {
    $('.button-add-card').click(function() {
        $('#modal-add-card').arcticmodal();
    });

    $('.button-deposid-confirm').click(function() {
        $('#modal-deposid-confirm').arcticmodal();
    });

    $('.button-deposid-success').click(function() {
        $('#modal-deposid-success').arcticmodal();
    });

    $('.button-delete-plan').click(function() {
        $('#modal-delete-plan').arcticmodal();
    });

    $('.button-saving-plan-create').click(function() {
        $('#modal-saving-plan-create').arcticmodal();
    });

    $('.button-saving-plan-create-success').click(function() {
        $('#modal-saving-plan-create-success').arcticmodal();
    });

    $('.button-request-a-payment').click(function() {
        $('#modal-request-a-payment').arcticmodal();
    });

    $('.button-request-a-payment-success').click(function() {
        $('#modal-request-a-payment-success').arcticmodal();
    });

    $('.button-reject-received-money').click(function() {
        $('#modal-reject-received-money').arcticmodal();
    });

    $('.button-add-bank-account').click(function() {
        $('#modal-add-bank-account').arcticmodal();
    });

    $('.button-withdrawal-by-transfer').click(function() {
        $('#modal-withdrawal-by-transfer').arcticmodal();
    });

    $('.button-withdrawal-by-transfer-success').click(function() {
        $('#modal-withdrawal-by-transfer-success').arcticmodal();
    });

    $('.right-content .transaction-detailed-item .top').click(function() {
        $(this).toggleClass('opened');
        $(this).next('.right-content .transaction-detailed-item .bot').slideToggle();
    });

    $('.header__mobile-button').click(function() {
        $('.mobile-menu-overlay').fadeIn();
        $('.mobile-menu-body').fadeIn();
    });

    $('.mobile-menu-overlay').click(function() {
        $('.mobile-menu-overlay').fadeOut();
        $('.mobile-menu-body').fadeOut();
    });

    $('.mobile-menu-body .top .mobile-menu-close').click(function() {
        $('.mobile-menu-overlay').fadeOut();
        $('.mobile-menu-body').fadeOut();
    });
});

function CopyToClipboard(id)
{
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
};