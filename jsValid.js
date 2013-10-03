;jsValid = function( value ){

    var jsValidation = function( value ){

        var me = this;



        var assertion_result = function( result, error_message ){

            if( !result ){
                throw error_message;
            }

            return me;

        };



        // String

            // checks
                me.isString = function(){

                    return typeof( value ) === 'string';

                };


                me.isNonEmptyString = function(){

                    return me.isString() && value.length > 0;

                };


            // assertions
                me.assertNonEmptyString = function(){

                    return assertion_result( me.isNonEmptyString(), 'Nonempty string expected' );

                };


            // casts
                me.getAsString = function(){

                    return String( value );

                };



        // Numerics

            // checks
                me.isInteger = function(){

                    return value !== "" && !isNaN( value ) && Math.round( value ) == value;

                };


                me.isPositiveInteger = function(){

                    return me.isInteger() && value >= 0;

                };


            // assertions
                me.assertPositiveInteger = function( error_message ){

                    return assertion_result( me.isPositiveInteger(), 'Positive integer expected' );

                };


            // casts
                me.getAsInteger = function(){

                    return parseInt( value );

                };


    };


    return new jsValidation( value );

};