using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;
using Microsoft.Extensions.Logging;
using Microsoft.VisualStudio.TestPlatform.CommunicationUtilities;
using Microsoft.VisualStudio.Web.CodeGeneration.Contracts.Messaging;
using Moq;
using Serilog;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Net;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using System.Xml.Linq;
using UFO.Controllers;
using UFO.DAL;
using UFO.Model;
using UFO2.Controllers;
using UFO2.DAL.UfoRepo;
using Xunit;


namespace Ufotest
{
    public class CommentControllerTest
    {
        private const string _loggIn = "loggIn";
        private const string _notLoggIn = "";

        private readonly Mock<ICommentRepository> mockRep = new Mock<ICommentRepository>();
        private readonly Mock<ILogger<CommentController>> mockLog = new Mock<ILogger<CommentController>>();

        private readonly Mock<HttpContext> mockHttpContext = new Mock<HttpContext>();
        private readonly MockHttpSession mockSession = new MockHttpSession();
        [Fact]
        public async Task AddCommentLoggInOk()
        {
            {
                //arrange
                var comment = new Comment
                {
                    Id = 1,
                    UfoId = 1,
                    Comments = "hey der"
                };

                mockRep.Setup(u => u.RegisterComment(comment)).ReturnsAsync(true);

                var commentController = new CommentController(mockRep.Object, mockLog.Object);

                mockSession[_loggIn] = _loggIn;
                mockHttpContext.Setup(s => s.Session).Returns(mockSession);
                commentController.ControllerContext.HttpContext = mockHttpContext.Object;

                //act
                var resultat = await commentController.RegisterComment(comment) as OkObjectResult;
                //assert
                Assert.Equal((int)HttpStatusCode.OK, resultat.StatusCode);
            }
        }
            [Fact]
            public async Task AddCommentNotLoggIn()

            {
                //arrange
                var comment = new Comment
                {
                    Id = 1,
                    UfoId = 1,
                    Comments = "hey der"
                };

                mockRep.Setup(u => u.RegisterComment(comment)).ReturnsAsync(true);

                var commentController = new CommentController(mockRep.Object, mockLog.Object);

                mockSession[_loggIn] = _notLoggIn;
                mockHttpContext.Setup(s => s.Session).Returns(mockSession);
                commentController.ControllerContext.HttpContext = mockHttpContext.Object;

                //act
                var resultat = await commentController.RegisterComment(comment) as UnauthorizedObjectResult;
                //assert
                // Assert.Equal((int)HttpStatusCode.OK, resultat.StatusCode);
                Assert.Equal("Unauthorized, please log in", resultat.Value);
            }
        [Fact]
        public async Task AddCommentLoggedNotOk()
        {
            // Arrange

            mockRep.Setup(k => k.RegisterComment(It.IsAny<Comment>())).ReturnsAsync(false);

            var commentController = new CommentController(mockRep.Object, mockLog.Object);

            mockSession[_loggIn] = _loggIn;
            mockHttpContext.Setup(s => s.Session).Returns(mockSession);
            commentController.ControllerContext.HttpContext = mockHttpContext.Object;

            // Act
            var resultat = await commentController.RegisterComment(It.IsAny<Comment>()) as BadRequestObjectResult;

            // Assert 
            Assert.Equal((int)HttpStatusCode.BadRequest, resultat.StatusCode);
            Assert.Equal("Comment could not be saved", resultat.Value);
        }
        [Fact]
        public async Task RegLoggInnWrongInput()
        {
            //arrange
            var comment = new Comment
            {
                Id = 1,
                UfoId = 1,
                Comments = ""
            };

            mockRep.Setup(u => u.RegisterComment(comment)).ReturnsAsync(true);

            var commentController = new CommentController(mockRep.Object, mockLog.Object);

            commentController.ModelState.AddModelError("Text", "Feil i inputvalidering");

            mockSession[_loggIn] = _loggIn;
            mockHttpContext.Setup(s => s.Session).Returns(mockSession);
            commentController.ControllerContext.HttpContext = mockHttpContext.Object;

            //act
            var resultat = await commentController.RegisterComment(comment) as BadRequestObjectResult;

            // Assert 
            Assert.Equal((int)HttpStatusCode.BadRequest, resultat.StatusCode);
            Assert.Equal("Feil i inputvalidering", resultat.Value);

        }
        [Fact]
        public async Task DeleteCommentLoggedInOk()
        {
            // Arrange

            mockRep.Setup(u => u.DeleteComment(It.IsAny<int>())).ReturnsAsync(true);

            var commentController = new CommentController(mockRep.Object, mockLog.Object);

            mockSession[_loggIn] = _loggIn;
            mockHttpContext.Setup(s => s.Session).Returns(mockSession);
            commentController.ControllerContext.HttpContext = mockHttpContext.Object;

            // Act
            var resultat = await commentController.DeleteComment(It.IsAny<int>()) as OkObjectResult;

            // Assert 
            Assert.Equal((int)HttpStatusCode.OK, resultat.StatusCode);
        }
        [Fact]
        public async Task DeleteCommentNotLoggedIn()
        {
            // Arrange

            mockRep.Setup(u => u.DeleteComment(It.IsAny<int>())).ReturnsAsync(true);

            var commentController = new CommentController(mockRep.Object, mockLog.Object);

            mockSession[_loggIn] = _notLoggIn;
            mockHttpContext.Setup(s => s.Session).Returns(mockSession);
            commentController.ControllerContext.HttpContext = mockHttpContext.Object;

            // Act
            var resultat = await commentController.DeleteComment(It.IsAny<int>()) as UnauthorizedObjectResult;

            // Assert 
            Assert.Equal((int)HttpStatusCode.Unauthorized, resultat.StatusCode);

            Assert.Equal("Unauthorized, please log in", resultat.Value);
        }

        [Fact]
        public async Task DeleteCommentLoggedInError()
        {
            // Arrange

            mockRep.Setup(k => k.DeleteComment(It.IsAny<int>())).ReturnsAsync(false);

            var commentController = new CommentController(mockRep.Object, mockLog.Object);

            mockSession[_loggIn] = _loggIn;
            mockHttpContext.Setup(s => s.Session).Returns(mockSession);
            commentController.ControllerContext.HttpContext = mockHttpContext.Object;

            // Act
            var resultat = await commentController.DeleteComment(It.IsAny<int>()) as NotFoundObjectResult;

            // Assert 
            Assert.Equal((int)HttpStatusCode.NotFound, resultat.StatusCode);

        }
        [Fact]
        public async Task GetCommentOk()
        {
          

                // Arrange
                var comment1 = new Comments {
                    Id = 1,
                    UfoId = 1,
                    Comment = "hey der"
                };
                var comment2 = new Comments {
                    Id = 1,
                    UfoId = 1,
                    Comment = "hey der"
                };
                var comment3 = new Comments {
                    Id = 3,
                    UfoId = 1,
                    Comment = "hey der"
                };

            var commentList = new List<Comments>();
            commentList.Add(comment1);
            commentList.Add(comment2);
            commentList.Add(comment3);

            mockRep.Setup(c => c.GetComments(It.IsAny<int>())).ReturnsAsync(commentList);
                var commentController = new CommentController(mockRep.Object, mockLog.Object);

                // Act
                var result = await commentController.GetComments(It.IsAny<int>()) as OkObjectResult;

                // Assert
                Assert.Equal(commentList, (List<Comments>)result.Value);
            }

        [Fact]
        public async Task GetCommentNotOk()
        {
            // Arrange
            mockRep.Setup(c => c.GetComments(It.IsAny<int>())).ReturnsAsync(() => null);
            var commentController = new CommentController(mockRep.Object, mockLog.Object);

            // Act
            var resultat = await commentController.GetComments(It.IsAny<int>()) as NotFoundObjectResult;

            // Assert 
            Assert.Equal((int)HttpStatusCode.NotFound, resultat.StatusCode);
            Assert.Equal("not found", resultat.Value);

        }
        [Fact]
        public async Task UpvoteCommentLogInOk()
        {
            // Arrange
            mockRep.Setup(c => c.LikeComment(It.IsAny<int>())).ReturnsAsync(true);
            var commentController = new CommentController(mockRep.Object, mockLog.Object);

            mockSession[_loggIn] = _loggIn;
            mockHttpContext.Setup(s => s.Session).Returns(mockSession);
            commentController.ControllerContext.HttpContext = mockHttpContext.Object;

            // Act
            var result = await commentController.LikeComment(It.IsAny<int>()) as OkObjectResult;

            // Assert
            Assert.Equal((int)HttpStatusCode.OK, result.StatusCode);
          
        }

        [Fact]
        public async Task UpvoteCommentNotLoggedInn()
        {
            // Arrange
            mockRep.Setup(o => o.LikeComment(It.IsAny<int>())).ReturnsAsync(false);

            var commentController = new CommentController(mockRep.Object, mockLog.Object);

            mockSession[_loggIn] = _notLoggIn;
            mockHttpContext.Setup(s => s.Session).Returns(mockSession);
            commentController.ControllerContext.HttpContext = mockHttpContext.Object;

            // Act
            var result = await commentController.LikeComment(It.IsAny<int>()) as UnauthorizedObjectResult;

            // Assert
            Assert.Equal((int)HttpStatusCode.Unauthorized, result.StatusCode);
            Assert.Equal("Unauthorized, please log in", result.Value);
        }

        [Fact]
        public async Task UpvoteCommentLogInNotOk()
        {
            // Arrange
            mockRep.Setup(c => c.LikeComment(It.IsAny<int>())).ReturnsAsync(false);
            var commentController = new CommentController(mockRep.Object, mockLog.Object);

            mockSession[_loggIn] = _loggIn;
            mockHttpContext.Setup(s => s.Session).Returns(mockSession);
            commentController.ControllerContext.HttpContext = mockHttpContext.Object;

            // Act
            var result = await commentController.LikeComment(It.IsAny<int>()) as BadRequestObjectResult;

            // Assert
            Assert.Equal((int)HttpStatusCode.BadRequest, result.StatusCode);
            Assert.Equal("could not like comment", result.Value);
        }
        [Fact]
        public async Task DislikeCommentLoggInOk()
        {
            // Arrange
            mockRep.Setup(c => c.DislikeComment(It.IsAny<int>())).ReturnsAsync(true);
            var commentController = new CommentController(mockRep.Object, mockLog.Object);

            mockSession[_loggIn] = _loggIn;
            mockHttpContext.Setup(s => s.Session).Returns(mockSession);
            commentController.ControllerContext.HttpContext = mockHttpContext.Object;

            // Act
            var result = await commentController.DislikeComment(It.IsAny<int>()) as OkObjectResult;

            // Assert
            Assert.Equal((int)HttpStatusCode.OK, result.StatusCode);
            
        }

        [Fact]
        public async Task DislikeCommentNotLoggedInn()
        {
            // Arrange
            mockRep.Setup(o => o.DislikeComment(It.IsAny<int>())).ReturnsAsync(false);

            var commentController = new CommentController(mockRep.Object, mockLog.Object);

            mockSession[_loggIn] = _notLoggIn;
            mockHttpContext.Setup(s => s.Session).Returns(mockSession);
            commentController.ControllerContext.HttpContext = mockHttpContext.Object;

            // Act
            var result = await commentController.DislikeComment(It.IsAny<int>()) as UnauthorizedObjectResult;

            // Assert
            Assert.Equal((int)HttpStatusCode.Unauthorized, result.StatusCode);
            Assert.Equal("Unauthorized, please log in", result.Value);
        }

        [Fact]
        public async Task DislikeCommentLogInNotOk()
        {
            // Arrange
            mockRep.Setup(c => c.DislikeComment(It.IsAny<int>())).ReturnsAsync(false);
            var commentController = new CommentController(mockRep.Object, mockLog.Object);

            mockSession[_loggIn] = _loggIn;
            mockHttpContext.Setup(s => s.Session).Returns(mockSession);
            commentController.ControllerContext.HttpContext = mockHttpContext.Object;

            // Act
            var result = await commentController.DislikeComment(It.IsAny<int>()) as BadRequestObjectResult;

            // Assert
            Assert.Equal((int)HttpStatusCode.BadRequest, result.StatusCode);
            Assert.Equal("could not like comment", result.Value);
        }
    


    }

    }




    

