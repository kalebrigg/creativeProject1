var token = 'AQCNIUbjn-af8Btf2PrpzGPovm3fAP5P9T8cmHLKrRT3ePJH8wIl5YSxtBkKW7DmIwai9iBge1xodn645Op3aKnn8SMTPhBHPuI74mM4ptBqeNExRe25YNIRJGVfJF75D-uC2kS6Jq9lVKUYd1yP5BKcyOO5-fF4dQlSoP12T6zucUES5xfl44-9ng9J0gdfXRPpraYkvkr7spPNK2N0U90tIGb3OJNZBY2gGfO_atPCWg',
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
