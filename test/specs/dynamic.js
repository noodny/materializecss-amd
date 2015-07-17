describe('Dynamic version', function(done) {
    it('should have global Materialize object and jquery plugins', function(done) {
        require([
            'jquery', 'global', 'animation', 'buttons', 'cards', 'character_counter',
            'collapsible', 'dropdown', 'forms', 'hammerjs', 'jquery.easing',
            'jquery.hammer', 'jquery.timeago', 'leanModal', 'materialbox',
            'parallax', 'picker', 'picker.date', 'pushpin', 'scrollFire',
            'scrollspy', 'sideNav', 'slider', 'tabs', 'toasts', 'tooltip',
            'transitions', 'velocity', 'waves'
        ], function($, Materialize) {
            expect(typeof Materialize).not.toBe('undefined');
            expect(typeof $.fn.collapsible).toBe('function');
            expect(typeof $.fn.tooltip).toBe('function');
            expect(typeof $.fn.materialbox).toBe('function');
            expect(typeof $.fn.slider).toBe('function');
            expect(typeof $.fn.leanModal).toBe('function');
            expect(typeof $.fn.openModal).toBe('function');
            expect(typeof $.fn.closeModal).toBe('function');
            expect(typeof $.fn.parallax).toBe('function');
            expect(typeof $.fn.pushpin).toBe('function');
            expect(typeof $.fn.scrollSpy).toBe('function');
            expect(typeof $.fn.sideNav).toBe('function');
            expect(typeof $.fn.tabs).toBe('function');
            done();
        });
    })
});
