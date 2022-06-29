/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    let len = s.length;
    let maxPal = 0;
    let ansPal = "";
    let l = 0;
    let r = 0;
    for(let i = 0; i < len; i ++)
    {
        //odd pal
        l = i;
        r = i;
        while( l >= 0 && r < len && s[r] == s[l])
        {
            if((r - l + 1) > maxPal)
            {
                ansPal = s.slice(l, r + 1);
                maxPal = (r - l + 1);
            }
            l --;
            r ++;
        }

        //even pal
        l = i;
        r = i + 1;
        while( l >= 0 && r < len && s[r] == s[l])
        {
            if((r - l + 1) > maxPal)
            {
                ansPal = s.slice(l, r + 1);
                maxPal = (r - l + 1);
            }
            l --;
            r ++;
        }
    }
    return ansPal;
};