var token = 'AQAmvkY0yCjLqvHOkl_j83wuO7v0AM3z1xATS2yKlEZZ7kMSs16n3FG3PhtONec1YCo-gSJn0Xht5DoIIlI9moEf8t66IWb713mEagc3gscsk6AEjfbItPPfbVUVzDMkBzHWJolNXDrhVDwlfOpMuiVfxAls2EFTHHpWhBWqg2QxlEVzDIrSHpPMN17eeOigOr3XXrwT2PdKbfYtubb9yUpRQLWnrWPa8iFPwl7TZLWfrA',
    container2 = document.getElementById( 'rudr_userinfo' ),
    scrElement2 = document.createElement( 'script' );

window.mishaProcessResult2 = function( response ) {
	container2.innerHTML = '<div><p><img src="' + response.data.profile_picture + '"></p></div>'
		+ '<div><h1>' + response.data.username + '</h1>'
		+ '<p>#' + response.data.id + '</p>'
		+ '<p>' + response.data.counts.media + ' media ' + response.data.counts.followed_by + ' followers ' + response.data.counts.follows + ' follows</p>'
		+ '<p><strong>' + response.data.full_name + '</strong> ' + response.data.bio + '<a href="' + response.data.website + '">' + response.data.website + '</a></p></div>';
}

scrElement2.setAttribute( 'src', 'https://api.instagram.com/v1/users/self?access_token=' + token + '&callback=mishaProcessResult2' );
document.body.appendChild( scrElement2 );
