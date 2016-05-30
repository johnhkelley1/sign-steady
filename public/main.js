$(function(){

	highlight = getParameterByName('highlight');
	speech = getParameterByName('speech');
	questions = getParameterByName('questions');

	init_page();
	$(".sheet span").click(function(event){
		if(highlight == "false"){
			return
		}
		var def = $(event.target).attr('data-def');
		var term = $(event.target).html();

		$('.def').hide().html(def).fadeIn('fast');
		$('.term').hide().html(term).fadeIn('fast');
		
	});

	var isSound = false;
	$("#speech-btn").click(function(){

		isSound = !isSound;

		if(isSound) {
			$(".sound-toggle").addClass("mdi-volume-high");
			$(".sound-toggle").removeClass("mdi-volume-off");
			$("#speech-btn").html("Stop Text To Speech");
			responsiveVoice.speak('SUBLEASE AGREEMENT. This is an agreement to sublet real property according to the terms specified below. The sublessor agrees to sublet and the subtenant agrees to take the premises described below. Both parties agree to keep, perform and fulfill the promises, conditions and agreements below: 1. The sublessor is: blank 2. The subtenant is: blank 3. The location of the premises is: blank City of Evanston, Cook County, Illinois. Unit No. blank 4. The term of this sublease is blank, beginning blank, 20 blank. The rent is $ blank per month, payable in advance on the blank day of each month. The rent is payable to blank at (address) blank. 5. The sublease agreement will terminate on (date) blank. There shall be no holding over under the terms of this sublease agreement under any circumstances. 6. All charges for utilities connected with premises which are to be paid by the sublessor under the master lease shall be paid by the subtenant for the term of this sublease. 7. Subtenant agrees to surrender and deliver to the sublessor the premises and all furniture and decorations within the premises in as good a condition as they were at the beginning of the term, reasonable wear and tear excepted. The subtenant will be liable to the sublessor for any damages occurring to the premises or the contents thereof or to the building which are done by the subtenant or his guests. 8. Subtenant agrees to pay to sublessor a deposit of $ blank to cover damages and cleaning. Sublessor agrees that if the premises and contents thereof are returned to him/her in the same condition as when received by the subtenant, reasonable wear and tear thereof excepted, (s)he will refund to the subtenant $ blank at the end of the term, or within 30 days thereafter. Any reason for retaining a portion of the deposit shall be explained in writing within 30 days to the subtenant. 9. At the time of taking possession of the premises by the subtenant, the sublessor will provide the subtenant with an inventory form within three (3) days of taking possession. 10. This sublease agreement incorporates and is subject to the original lease agreement between the sublessor and his lessor, a copy of which is attached hereto, and which is hereby referred to and incorporated as if it were set out here at length. The subtenant agrees to assume all of the obligations and responsibilities of the sublessor under the original lease for the duration of the sublease agreement. 11. In the event of any legal action concerning this sublease, the losing party shall pay to the prevailing party reasonable attorney’s fees and court costs to be fixed by the court wherein such judgment shall be entered. 12. Other blank 13. This lease constitutes the sole agreement between the parties, and no additions, deletions or modifications may be accomplished without the written consent of both parties (ANY ORAL REPRESENTATIONS MADE AT THE TIME OF EXECUTING THIS LEASE ARE NOT LEGALLY VALID AND, THEREFORE, ARE NOT BINDING UPON EITHER PARTY). 14. The words “sublessor” and “subtenant” as used herein include the plural as well as the singular; no regard for gender is intended by the language in this sublease. 15. If the subtenant is under 18 years of age, then his/her legal guardian or parent guarantees and agrees to perform all of the terms, covenants and conditions of this sublease by affixing his signature below. 16. Each signatory to this sublease acknowledges receipt of an executed copy thereof. 17. This sublease is not binding upon either party unless approved by the landlord as provided below. 18. The parties hereby bind themselves to this agreement by their signatures affixed below on this blank day of blank, 20 blank. SUBLESSOR SUBTENANT blank (Parent/guardian if subtenant is under 18 years of age). I hereby give my consent to subletting of the above-described premises as set out in this sublease agreement. Date: blank Landlord/Agent blank ORIGINAL LEASE ATTACHED: blank Yes blank  No INVENTORY CHECKLIST ATTACHED: blank  Yes blank  No');
		}
		else {
			$(".sound-toggle").removeClass("mdi-volume-high");
			$(".sound-toggle").addClass("mdi-volume-off");
			$("#speech-btn").html("Text To Speech");
			responsiveVoice.cancel();
		}

	});

	var options = [false,false,false];

	$('.checkbox').click(function(event){
		var id = $(event.target).attr('data-id');
		options[id] = !options[id];
		if (options[id] == false){
			$(event.target).removeClass("checked");
		}
		else {
			$(event.target).addClass("checked");
		}

	});

	$("#review-contract-btn").click(function(event){
		var url = "/contract.html?highlight="+options[0]+"&speech="+options[1]+"&questions="+options[2];
		window.location.replace(url);
	});

	$("#questions-next-btn").click(function(){

		$('#modal-1').hide();
		$("#modal-2").fadeIn('fast');

	})

	$("#sign-btn").click(function() {
		if($(".sig-input").val() == "") {
			$(".sig-input").addClass("invalid");
			return;
		}
		$(".sig-input").removeClass("invalid");
		$('#myModal').modal('hide');
		$(".sig-input").val("");
		swal("You've successfully signed!", "Thanks for using SignSteady.", "success");
	});

	$("#open-modal-btn").click(function(){
		$(".modal-content").hide();
		if(questions == "true"){
			$("#modal-1").show();
		}
		else {
			$("#modal-2").show();
		}
	});

	$('.modal-content input[type=radio]').click(function(event){
		var conf = $(event.target).val();
		$(".modal-content").hide();
		if(conf == "4" || conf == "5") {
			$("#modal-3").fadeIn('fast');
		}
		else {
			$("#modal-4").fadeIn('fast');
		}
		$('.modal-content input[type=radio]').prop('checked', false);
	})



});

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
function init_page() {
	if(highlight == "false"){
		$(".sheet span").addClass("no-highlight");
		$(".def").hide();
	}
	if(speech == "false"){
		$("#speech-btn").hide();
		
	}
	if(questions == "false"){
		$(".questions").hide();
	}
}
