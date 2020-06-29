let coin = {
    state: 0,
    flip: function () {
        let number = Math.random()

        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
        let binary = Math.round(number)
        this.state = binary
    },

    //This is a place where console.log won't work well.


    toString: function () {
        if (this.state === 0) {
            return 'Heads '
        } else if (this.state === 1) {
            return 'Tails '
        }
        //  2. Return the string "Heads" or "Tails", depending on whether
        //  "this.state" is 0 or 1.

    },
    toHTML: function () {
        let image = document.createElement('img');
        image.width = 100
        //  3. Set the properties of this image element to show either face-up
        //    or face-down, depending on whether this.state is 0 or 1.
        if (this.state === 0) {
            image.src = "./images/Quarter-heads.jpg";

        } else {
            image.src = "./images/quarter-tails.jpg"
        }
        // /c/users/user/coin-object/images/quarterheads
        // /c/users/user/coin-object/images/quartertails
        return image;
    }
};

display20Flips()
function display20Flips() {
    for (i = 0; i < 20; i++) {
        coin.flip()
        document.body.append(coin.toString())
    }
    // document.createElement
    // parentNote.append
    // toString method
    //append string to DOM
}

display20Images()
function display20Images() {
    for (i = 0; i < 20; i++) {
        coin.flip()
        document.body.append(coin.toHTML())
    }
    // document.createElement
    // parentNode.append
    // toHTML method
}